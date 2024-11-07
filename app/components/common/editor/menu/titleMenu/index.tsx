import { MdOutlineTitle } from "react-icons/md";
import MenuButton from "../menuButton";

export default function TitleMenu() {
  return (
    <>
      <div className="h-[100px] rounded-xl bg-slate-900 flex justify-center items-center w-full">
        <div className=" flex flex-row gap-x-3 w-full justify-evenly items-center  text-white font-semibold text-[15px] px-2">
          <MenuButton text="large">
            <MdOutlineTitle size={32} color="white" />
          </MenuButton>

          <MenuButton text="medium">
            <MdOutlineTitle size={32} color="white" />
          </MenuButton>

          <MenuButton text="small">
            <MdOutlineTitle size={32} color="white" />
          </MenuButton>
        </div>
      </div>
    </>
  );
}
