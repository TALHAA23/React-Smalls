import { useUIColors } from "../hook/UIColorsProvider";

export default function Sun() {
  const sunColor = useUIColors()?.sunColor;
  return (
    <div className=" absolute w-[20%] right-0 top-3">
      <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <defs>
          {" "}
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            {" "}
            <stop
              id="stop1"
              stopColor={sunColor?.[0] || "rgba(248, 117, 55, 1)"}
              offset="0%"
            ></stop>{" "}
            <stop
              id="stop2"
              stopColor={sunColor?.[1] || "rgba(251, 168, 31, 1)"}
              offset="100%"
            ></stop>{" "}
          </linearGradient>{" "}
        </defs>{" "}
        <path
          fill="url(#sw-gradient)"
          d="M29,-16C36,-4.6,39.1,9.9,33.6,20.8C28.2,31.8,14.1,39.1,0.8,38.7C-12.5,38.2,-25.1,30,-31,18.8C-37,7.6,-36.3,-6.5,-30.1,-17.5C-23.8,-28.4,-11.9,-36.3,-0.5,-36C11,-35.7,22,-27.4,29,-16Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          stroke="url(#sw-gradient)"
        ></path>{" "}
      </svg>
    </div>
  );
}
