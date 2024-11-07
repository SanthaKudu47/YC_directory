import { FaImage, FaLink, FaParagraph } from "react-icons/fa";
import MenuButton from "../menuButton";

export default function ElementMenu() {
  return (
    <>
      <div className="h-[100px] rounded-xl bg-slate-900 flex justify-center items-center w-full">
        <div className=" flex flex-row gap-x-3 w-full justify-evenly items-center  text-white font-semibold text-[15px] px-2">
          <MenuButton text="image">
            <FaImage size={32} color="white" />
          </MenuButton>

          <MenuButton text="paragraph">
            <FaParagraph size={32} color="white" />
          </MenuButton>

          <MenuButton text="link">
            <FaLink size={32} color="white" />
          </MenuButton>
        </div>
      </div>
    </>
  );
}
