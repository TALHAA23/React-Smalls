type Mode = "2p" | "comp";
export default function readURL() {
  const url = new URLSearchParams(location.search);
  const grid = parseInt(url.get("grid") || "3");
  const mode: Mode = (url.get("mode") as Mode) || "comp";
  const type = url.get("type") || "normal";

  return {
    grid,
    mode,
    type,
  };
}
