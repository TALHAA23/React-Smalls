import { Link } from "react-router-dom";
import {
  usePlaygroundAttributesHandler,
  useQueryParams,
} from "../hooks/PlayGroundAttributesProvider";
type MatchMakingOptionTuple = [string, string[]];
export default function MatchMaking() {
  const matchMakingOptions: MatchMakingOptionTuple[] = [
    ["mode", ["2p", "comp"]],
    ["grid", ["3x3", "4x4", "5x5"]],
    ["type", ["normal", "advance"]],
  ];
  const queryParams = useQueryParams();
  const changeHandler = usePlaygroundAttributesHandler();
  const formHtmlEl = matchMakingOptions.map(([title, catagories]) => (
    <div className="flex">
      <h1 className=" basis-3/12">{title}</h1>
      <div className="grow flex items-center gap-2">
        {catagories.map((catagory) => (
          <div className="grow text-center">
            <label htmlFor={catagory}>
              <input
                onChange={(e) => changeHandler(e)}
                className="peer"
                type="radio"
                id={catagory}
                value={catagory}
                name={title}
                hidden
                checked={queryParams.includes(catagory)}
              />
              <p className="relative peer-checked:text-red-600 border border-purple-500">
                {catagory == "comp" ? "computer" : catagory}
              </p>
            </label>
          </div>
        ))}
      </div>
    </div>
  ));
  return (
    <section className="w-full h-screen flex items-center justify-center font-[playPretend]">
      <form className=" w-[90%] max-w-[600px] border border-black ">
        <h1 className=" text-center">Match Making</h1>
        {formHtmlEl}
        <Link
          to={`play?${queryParams}`}
          className="block  text-center border border-black"
        >
          Start
        </Link>
      </form>
    </section>
  );
}
