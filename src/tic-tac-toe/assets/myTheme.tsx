import { ReactElement, createElement } from "react";
interface Theme {
  board: string;
  marker: ReactElement[];
}
export default function myTheme(): Theme | false {
  const getTheme = localStorage.getItem("theme");
  if (!getTheme) return false;

  const myTheme = JSON.parse(getTheme);
  if (!("board" in myTheme && "marker" in myTheme)) return false;
  let newElement: ReactElement[] = [];
  for (let mark of myTheme.marker)
    newElement.push(createElementFromObject(mark));
  return { board: myTheme.board, marker: newElement };
}

function createElementFromObject(obj) {
  if (Array.isArray(obj)) {
    return obj.map(createElementFromObject);
  } else if (typeof obj === "object" && obj !== null) {
    let type = obj.type;
    let props = { ...obj.props };
    let children = props.children;

    if (children) {
      if (Array.isArray(children)) {
        props.children = children.map(createElementFromObject);
      } else if (typeof children === "object") {
        props.children = createElementFromObject(children);
      }
    }

    return createElement(type, props);
  } else {
    return obj;
  }
}
