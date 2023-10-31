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
    <div className="flex flex-col sm:flex-row">
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
              <p className="relative text-base sm:text-2xl peer-checked:border-b-4 peer-checked:from-rose-400 peer-checked:to-rose-600 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 from-10% to-yellow-500 to-80% transition-all duration-200 hover:tracking-[10px] hover:to-yellow-900">
                {catagory == "comp" ? "computer" : catagory}
              </p>
            </label>
          </div>
        ))}
      </div>
    </div>
  ));
  return (
    <section className="w-full h-screen flex items-center justify-center font-[playPretend] bg-gradient-to-tr from-yellow-200/40 to-yellow-400/25">
      <form className="w-[90%] sm:w-[500px] h-3/4 sm:h-1/2 max-h-[700px] border border-black px-2 py-6 flex flex-col justify-center gap-1 rounded-xl bg-black/80  shadow-2xl shadow-yellow-700/50 text-white">
        <h1 className=" text-center text-4xl  moveable-heading">
          Match Making
        </h1>
        {formHtmlEl}
        <Link
          to={`play?${queryParams}`}
          className="block mt-auto text-center border-b-4 self-end text-5xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-10% to-90% from-white to-white transition-all duration-200 hover:to-yellow-400 hover:tracking-[10px] hover:sm:tracking-[20px] hover:border-b-orange-400"
        >
          Start
        </Link>
      </form>
    </section>
  );
}
