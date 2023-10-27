import { createContext, useContext, useState } from "react";
const DEFAULT_SEARCHPARAMS = "mode=comp&type=normal&grid=3x3";
type AttributeContext = [
  searchParams: string,
  stateHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
];
const PlayGroundAttributesContext = createContext<AttributeContext>([
  "",
  () => {},
]);
export const useQueryParams = () => useContext(PlayGroundAttributesContext)[0];
export const usePlaygroundAttributesHandler = () =>
  useContext(PlayGroundAttributesContext)[1];
interface Children {
  children: React.ReactNode;
}
export default function PlayGroundAttributesProvider(props: Children) {
  const [queryParams, setQueryParams] = useState(DEFAULT_SEARCHPARAMS);
  function handleAttributeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    if (!name.match(/\b(?:mode|type|grid)\b/gi))
      throw new Error("Invalid Search Param Provided");
    const currentURL = new URLSearchParams(queryParams);
    currentURL.set(name, value);
    setQueryParams(currentURL.toString());
  }

  return (
    <PlayGroundAttributesContext.Provider
      value={[queryParams, handleAttributeChange]}
    >
      {props.children}
    </PlayGroundAttributesContext.Provider>
  );
}
