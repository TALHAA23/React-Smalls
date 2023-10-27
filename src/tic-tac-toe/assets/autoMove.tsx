import readURL from "./readURL";

export default function autoMove() {
  const { grid } = readURL();
  const [x, y] = [Math.random() * grid, Math.random() * grid];
  return [Math.floor(x), Math.floor(y)];
}
