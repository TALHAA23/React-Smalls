import Search from "./components/Search";
import { createContext, useEffect, useRef, useState } from "react";
import { Filter } from "./components/Filter";
import Landing from "./components/Landing";
import Result from "./components/Result";

type FilterContext<T> = (event: T) => void;
type FilterAndMovieContext<T> = [myFilter: T, movie: T];
export const FilterContext = createContext<FilterContext<any>>(() => {});
export const FilterAndMovieContext = createContext<FilterAndMovieContext<any>>([
  null,
  null,
]);

export default function MovieForMe() {
  const isIntialLand = useRef(true);
  const [movie, setMovie] = useState();
  const [showFilter, setShowFilter] = useState(false);
  const isFilterSet = localStorage.getItem("filter") ? true : false;
  const [myFilter, setMyFilter] = useState(
    JSON.parse(localStorage.getItem("filter")) || {
      gener: [],
      yearOfRelease: { start: 2023, end: 2023 },
      ratingFromSrc: { imdb: 0, metacritic: 0, rottenTomato: 0 },
      rating: [],
    }
  );

  useEffect(() => {
    if (isIntialLand.current && !isFilterSet) {
      isIntialLand.current = false;
      return;
    }
    let timeoutId: number | undefined;
    timeoutId = setTimeout(
      () => localStorage.setItem("filter", JSON.stringify(myFilter)),
      2000
    );
    return () => clearTimeout(timeoutId);
  }, [myFilter]);

  function updateMyFilter(e) {
    const { value, name } = e.target || e;

    setMyFilter((prevFilter) => {
      let updateFeild = prevFilter[name];
      let updatedField = null;
      if (JSON.stringify(updateFeild).startsWith("[")) {
        updateFeild.includes(value)
          ? updateFeild.splice(updateFeild.indexOf(value), 1)
          : updateFeild.push(value);
        updatedField = updateFeild;
      } else if (updateFeild instanceof Object) {
        updateFeild = {
          ...updateFeild,
          [e.ratingSrc ? e.ratingSrc : e.target.id]: value,
        };
        updatedField = updateFeild;
      } else updatedField = updateFeild;

      return {
        ...prevFilter,
        [name]: updatedField,
      };
    });
  }

  return (
    <div className="relative w-full h-screen">
      <div onMouseOver={() => setShowFilter(true)}>
        <img
          className="z-10 scale-50 md:scale-100 absolute -left-3 -top-3 md:top-3 md:left-3 p-4 w-16 rounded bg-slate-300"
          src="/filter-solid.svg"
          alt=""
        />
      </div>
      {isFilterSet ? <Search movieSetter={setMovie} /> : <Landing />}
      <FilterContext.Provider value={updateMyFilter}>
        <Filter
          filter={myFilter}
          isShowFilter={showFilter}
          setFilter={setShowFilter}
        />
      </FilterContext.Provider>
      {movie && (
        <FilterAndMovieContext.Provider value={[myFilter, movie]}>
          <Result />
        </FilterAndMovieContext.Provider>
      )}
      <div
        className={`text-xs absolute top-1 right-1 w-[300px] text-center bg-[#000000c2] text-white rounded px-2 py-3 transition-opacity duration-1000 ${
          movie == false ? " opacity-100" : "opacity-0"
        } `}
      >
        Movie not found, try checking spelling mistakes and try again
      </div>
    </div>
  );
}
