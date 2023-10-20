const DAYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const MONTHS = [
  "january",
  "feburary",
  "march",
  "april",
  "may",
  "june",
  "july",
  "auguest",
  "september",
  "ocutber",
  "november",
  "december",
];
const now = new Date();

export default function DayManager__Header() {
  function createTask() {
    const dialogBox: HTMLDialogElement | null =
      document.querySelector("#dialogBox");
    dialogBox && dialogBox.showModal();
  }

  return (
    <>
      <div className="w-full flex items-center justify-between uppercase py-1 px-3 shadow-lg ">
        <div className=" text-white">
          <small className="text-[.6em]">Today</small>
          <p className="text-sm font-semibold">
            {DAYS[now.getDay()]},{now.getDate()} {MONTHS[now.getMonth()]}
          </p>
        </div>
        <div
          onClick={createTask}
          className=" bg-white/50 px-5 rounded-full hover:bg-white/100 transition-colors duration-500"
        >
          <img src="/add.svg" alt="" />
        </div>
      </div>
    </>
  );
}
