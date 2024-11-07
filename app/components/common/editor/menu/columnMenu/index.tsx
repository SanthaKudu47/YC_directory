import {
  MdOutlineLooks3,
  MdOutlineLooksOne,
  MdOutlineLooksTwo,
} from "react-icons/md";
import MenuButton from "../menuButton";

export default function ColumnMenu({
  layoutHandler,
}: {
  layoutHandler: (param: number) => void;
}) {
  const switchToSingleCol = function () {
    layoutHandler(1);
  };
  const switchedToDoubleCol = function () {
    layoutHandler(2);
  };
  const switchedToTripleCol = function () {
    layoutHandler(3);
  };
  return (
    <>
      <div className="h-[100px] rounded-xl bg-slate-900 flex justify-center items-center w-full">
        <div className=" flex flex-row gap-x-3 w-full justify-evenly items-center  text-white font-semibold text-[15px] px-2">
          <div className="flex w-full" onClick={switchToSingleCol}>
            <MenuButton text="column 1">
              <MdOutlineLooksOne size={32} color="white" />
            </MenuButton>
          </div>
          <div className="flex w-full" onClick={switchedToDoubleCol}>
            <MenuButton text="column 2">
              <MdOutlineLooksTwo size={32} color="white" />
            </MenuButton>
          </div>
          <div className="flex w-full" onClick={switchedToTripleCol}>
            <MenuButton text="column 3">
              <MdOutlineLooks3 size={32} color="white" />
            </MenuButton>
          </div>
        </div>
      </div>
    </>
  );
}
