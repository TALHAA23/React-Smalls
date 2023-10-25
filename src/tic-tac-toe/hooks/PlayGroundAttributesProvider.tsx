import { createContext, useContext, useState } from "react";

interface PlayGroundAttributes {
  mode: "2p" | "comp";
  type: "normal" | "advance";
  grid: "3x3" | "4x4" | "5x5";
}

const playGroundDefaultAttributes: PlayGroundAttributes = {
  mode: "comp",
  type: "advance",
  grid: "3x3",
};
type AttributeContext = [
  attributes: PlayGroundAttributes,
  stateHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
];
const PlayGroundAttributesContext = createContext<AttributeContext>([
  playGroundDefaultAttributes,
  () => {},
]);
export const usePlaygroundAttributes = () =>
  useContext(PlayGroundAttributesContext)[0];
export const usePlaygroundAttributesHandler = () =>
  useContext(PlayGroundAttributesContext)[1];
interface Children {
  children: React.ReactNode;
}
export default function PlayGroundAttributesProvider(props: Children) {
  const [playgroundAttributes, setPlaygroundAttributes] =
    useState<PlayGroundAttributes>(playGroundDefaultAttributes);

  function handleAttributeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setPlaygroundAttributes((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  return (
    <PlayGroundAttributesContext.Provider
      value={[playgroundAttributes, handleAttributeChange]}
    >
      {props.children}
    </PlayGroundAttributesContext.Provider>
  );
}
