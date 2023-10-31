import Menu from "./Menu";
import "../../assets/fonts.css";
export default function Home() {
  return (
    <div className=" w-full h-screen flex items-center justify-center font-[playPretend] bg-[url('/bg-waves.png')] bg-no-repeat bg-cover">
      <Menu />
    </div>
  );
}
