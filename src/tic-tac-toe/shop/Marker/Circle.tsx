export default function Circle() {
  return [Small(), Medium(), Large()];
}

function Small() {
  return (
    <div
      id="sm"
      className="w-[50%] border-inherit  absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-2 aspect-square rounded-full"
    ></div>
  );
}
function Medium() {
  return (
    <div
      id="md"
      className="w-[60%] border-inherit invisible  absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-2 aspect-square rounded-full"
    ></div>
  );
}
function Large() {
  return (
    <div
      id="lg"
      className="w-[70%] border-inherit invisible  absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-2 aspect-square rounded-full"
    ></div>
  );
}
