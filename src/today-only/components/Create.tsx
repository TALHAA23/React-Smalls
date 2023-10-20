import { useReducerProvider } from "../hook/ReducerProvider";
import createTaskFromFormElement from "../assets/createTaskFromFormElement";
import { FormEvent, useRef } from "react";
import { TaskLabel } from "../assets/types";

export default function Create() {
  const dialogBoxRef = useRef<HTMLDialogElement | null>(null);
  const dispatch = useReducerProvider()?.dispatch;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form: HTMLFormElement | null = document.querySelector("#newTaskForm");
    if (!form) throw new Error("Form not find");
    const formData = new FormData(form);
    const data = createTaskFromFormElement(formData);
    dispatch({ type: "add", payLoad: data });
    form.reset();
    dialogBoxRef.current?.close();
  }

  function hideBox(event: React.MouseEvent<HTMLDialogElement, MouseEvent>) {
    const edges = dialogBoxRef.current?.getBoundingClientRect();
    if (
      edges &&
      (event.pageX < edges?.left ||
        event.pageX > edges?.right ||
        event.pageY < edges?.top ||
        event.pageY > edges?.bottom)
    )
      dialogBoxRef.current?.close();
  }

  return (
    <dialog
      ref={dialogBoxRef}
      id="dialogBox"
      onClick={(e) => hideBox(e)}
      className="relative z-30 w-[90%] max-w-[600px] h-1/2 top-1/2 -translate-y-1/2 bg-white ring ring-purple-400  px-6 py-3 rounded"
    >
      <h1 className="w-full font-semibold text-lg sm:text-3xl">
        Create New Task
      </h1>
      <form id="newTaskForm" onSubmit={(e) => handleSubmit(e)}>
        <div className=" space-y-2">
          <Input />
          <div className="flex gap-2">
            <TimePicker name="openAt" />
            <TimePicker name="expireAt" />
          </div>
          <Select />
        </div>
        <button className=" absolute bottom-2 right-2 border-4 border-purple-500 text-purple-600 rounded-full px-10 py-2 text-lg font-semibold transition duration-500 hover:bg-purple-400 hover:text-white hover:border-transparent hover:ring-4 ring-offset-2 hover:ring-purple-900 ">
          Add
        </button>
      </form>
    </dialog>
  );
}

function Input() {
  return (
    <input
      name="title"
      maxLength={15}
      type="text"
      required
      placeholder="Title"
      className="w-full pl-2 py-2 border-2 border-purple-800 rounded outline-none ring-4 ring-transparent focus:ring-purple-300 focus:border-transparent"
    />
  );
}

function Select() {
  const options: TaskLabel[] = ["routine", "unusual", "exceptional"];
  return (
    <select
      name="taskLabel"
      className="w-full pl-2 py-2 border-2 border-purple-800 rounded
          outline-none ring-4 ring-transparent focus:ring-purple-300
          focus:border-transparent"
    >
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
}

interface TimePickerProps {
  name: "openAt" | "expireAt";
}

function TimePicker(props: TimePickerProps) {
  return (
    <input
      type="time"
      name={props.name}
      required={props.name == "openAt" ? true : false}
      className="w-full pl-2 py-2 border-2 border-purple-800 rounded
          outline-none ring-4 ring-transparent focus:ring-purple-300
          focus:border-transparent"
    />
  );
}
