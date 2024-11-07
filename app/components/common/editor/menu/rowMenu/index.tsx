import MenuButton from "../menuButton";
import { RiMenuAddFill } from "react-icons/ri";

export default function AddRowMenu({
  handler,
}: {
  handler: (param: number) => void;
}) {
  function addSingleRow() {
    handler(1);
  }
  function addTwoRows() {
    handler(2);
  }
  function addFiveRows() {
    handler(5);
  }
  return (
    <>
      <div className="h-[100px] rounded-xl bg-slate-900 flex justify-center items-center w-full">
        <div className=" flex flex-row gap-x-3 w-full justify-evenly items-center  text-white font-semibold text-[15px] px-2">
          <div className="flex w-full" onClick={addSingleRow}>
            <MenuButton text="1 row">
              <RiMenuAddFill size={32} color="white" />
            </MenuButton>
          </div>
          <div className="flex w-full" onClick={addTwoRows}>
            <MenuButton text="2 rows">
              <RiMenuAddFill size={32} color="white" />
            </MenuButton>
          </div>
          <div className="flex w-full" onClick={addFiveRows}>
            <MenuButton text="5 rows">
              <RiMenuAddFill size={32} color="white" />
            </MenuButton>
          </div>
        </div>
      </div>
    </>
  );
}
