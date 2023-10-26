import { createContext, useContext, useEffect, useState } from "react";

interface PlayGroundAttributes {
  mode: "2p" | "comp";
  type: "normal" | "advance";
  grid: "3x3" | "4x4" | "5x5";
}

const playGroundDefaultAttributes: PlayGroundAttributes = {
  mode: "comp",
  type: "normal",
  grid: "3x3",
};
type AttributeContext = [
  attributes: PlayGroundAttributes,
  stateHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
  searchParams: string
];
const PlayGroundAttributesContext = createContext<AttributeContext>([
  playGroundDefaultAttributes,
  () => {},
  "string",
]);
export const usePlaygroundAttributes = () =>
  useContext(PlayGroundAttributesContext)[0];
export const usePlaygroundAttributesHandler = () =>
  useContext(PlayGroundAttributesContext)[1];
export const useQueryParams = () => useContext(PlayGroundAttributesContext)[2];
interface Children {
  children: React.ReactNode;
}
export default function PlayGroundAttributesProvider(props: Children) {
  const [playgroundAttributes, setPlaygroundAttributes] =
    useState<PlayGroundAttributes>(playGroundDefaultAttributes);
  const [queryParams, setQueryParams] = useState("");

  function handleAttributeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setPlaygroundAttributes((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  useEffect(() => {
    const url = Object.entries(playgroundAttributes).toString();
    const matches = url.split(",");
    let result: any = matches.map((item, index) =>
      index % 2 === 0 ? item.concat("=") : item.concat("&")
    );
    result = result.toString().replace(/,/g, "").slice(0, -1);
    console.log(result);
    setQueryParams(result);
  }, [playgroundAttributes]);

  return (
    <PlayGroundAttributesContext.Provider
      value={[playgroundAttributes, handleAttributeChange, queryParams]}
    >
      {props.children}
    </PlayGroundAttributesContext.Provider>
  );
}
