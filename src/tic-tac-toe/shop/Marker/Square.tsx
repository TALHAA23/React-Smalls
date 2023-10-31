export default function Square() {
  return [Small(), Medium(), Large()];
}

function Small() {
  return (
    <div
      id="sm"
      className=" border-inherit  absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/2 border aspect-square"
    ></div>
  );
}
function Medium() {
  return (
    <div
      id="md"
      className=" border-inherit invisible  absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-2/3 border aspect-square"
    ></div>
  );
}
function Large() {
  return (
    <div
      id="lg"
      className=" border-inherit invisible  absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-3/4 border aspect-square"
    ></div>
  );
}
