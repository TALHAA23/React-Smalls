import readURL from "./readURL";
export default function updateUIforCurrentMove(target: HTMLElement | null) {
  if (!target) return;
  let movesCount = parseInt(target.dataset.reserveCount || "0");
  const { type } = readURL();

  if (type == "advance") {
    movesCount++;
    target.dataset.reserveCount = movesCount.toString();
    switch (movesCount) {
      case 2:
        target.querySelector("#md")?.classList.remove("invisible");
        break;
      case 3:
        target.classList.add("opacity-80");
        target.querySelector("#lg")?.classList.remove("invisible");
        target.classList.add("pointer-events-none");
    }
  } else {
    target.classList.add("pointer-events-none");
  }
}
