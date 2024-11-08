import { MdOutlineTitle } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { RiExchangeFill } from "react-icons/ri";
import { block, elementType, layouts } from "../types";

function elementsParser(type: elementType | null) {
  if (type === null) return <></>;
  switch (type) {
    case "HEADER_LARGE":
      return (
        <div className="flex flex-row gap-x-1 p-1 bg-gray-300 rounded-md max-h-[20px] items-center">
          <MdOutlineTitle />
          <div className="text-[8px]">L</div>
        </div>
      );
    case "HEADER_MEDIUM":
      return (
        <div className="flex flex-row gap-x-1 p-1 bg-gray-300 rounded-md max-h-[20px] items-center">
          <MdOutlineTitle />
          <div className="text-[8px]">M</div>
        </div>
      );

    default:
      break;
  }
}

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
  selectedBlockId,
}: {
  handler: (param: string) => void;
  layout: layouts;
  blocks: block[];
  rowId: string;
  selectedId: string;
  removeSelectedRow: (param: string) => void;
  selectBlockHandler: (rowId: string, blockId: string) => void;
  selectedBlockId: string;
}) {
  const selectBlock = function (blockId: [string, string]) {
    selectBlockHandler(blockId[0], blockId[1]);
  };

  return (
    <>
      <div
        className={`${
          selectedId === rowId && "border border-solid border-gray-600"
        } relative flex w-full gap-x-3 h-[70px] bg-gray-800 p-1 rounded-md`}
      >
        {blocks.map((blockMeta, index) => {
          return (
            <div
              onClick={() => {
                selectBlock(blockMeta.id);
              }}
              key={index}
              className={`${
                selectedId === blockMeta.id[0] &&
                selectedBlockId === blockMeta.id[1]
                  ? "border-2 border-solid border-blue-500"
                  : ""
              } flex bg-gray-600 rounded-md w-full overflow-hidden cursor-pointer hover:bg-gray-500 p-1`}
            >
              {elementsParser(blockMeta.elementType)}
            </div>
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
