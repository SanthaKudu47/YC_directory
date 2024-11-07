import { Dispatch, SetStateAction, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { RiExchangeFill } from "react-icons/ri";
import { block, layouts } from "../types";

function getColCount(layout: layouts) {
  switch (layout) {
    case "col1":
      return 1;

    case "col2":
      return 2;

    case "col3":
      return 3;

    default:
      return 3;
  }
}

export default function LayoutRow({
  handler,
  layout = "col3",
  blocks = [],
  selectedId,
  rowId,
  removeSelectedRow,
  selectBlockHandler,
}: {
  handler: (param: string) => void;
  layout: layouts;
  blocks: block[];
  rowId: string;
  selectedId: string;
  removeSelectedRow: (param: string) => void;
  selectBlockHandler: (rowId: string, id: number) => void;
  // selectedBlockId?: number | undefined;
  // selectRow: () => void;
  // selectBlock: () => void;
}) {
  const selectBlock = function (blockId: [string, number]) {
    selectBlockHandler(blockId[0], blockId[1]);
  };
  return (
    <>
      <div
        className={`${
          selectedId === rowId && "border-2 border-solid border-gray-600"
        } relative flex w-full gap-x-3 h-[70px] bg-gray-800 p-1 rounded-md`}
      >
        {blocks.map((blockMeta, index) => {
          return (
            <div
              onClick={() => {
                selectBlock(blockMeta.id);
              }}
              key={index}
              className="flex bg-gray-600 rounded-md w-full overflow-hidden cursor-pointer hover:bg-gray-500"
            ></div>
          );
        })}

        <div className="flex flex-col">
          <button
            onClick={(e) => {
              e.preventDefault();
              handler(rowId);
            }}
          >
            <RiExchangeFill size={30} color="white" />
          </button>
          <button>
            <IoCloseCircle
              size={30}
              color="white"
              onClick={(e) => {
                e.preventDefault();
                removeSelectedRow(rowId);
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
}
