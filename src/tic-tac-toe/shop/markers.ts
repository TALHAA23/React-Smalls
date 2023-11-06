import { ProductAttributes } from "../assets/type";
import Square from "./Marker/Square";
import Circle from "./Marker/Circle";
import EmojiSmile from "./Marker/Emoji-smile";

const markers: ProductAttributes[] = [
  {
    title: "square",
    resource: [...Square()],
    price: 20,
    isPurchased: false,
    catagory: "marker",
  },
  {
    title: "circle",
    resource: [...Circle()],
    price: 20,
    isPurchased: false,
    catagory: "marker",
  },
  {
    title: "smily me",
    resource: [...EmojiSmile()],
    price: 20,
    isPurchased: false,
    catagory: "marker",
  },
];
export default markers;
