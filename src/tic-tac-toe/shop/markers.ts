import Square from "./Marker/Square";
import Circle from "./Marker/Circle";

const markers = [
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
];
export default markers;
