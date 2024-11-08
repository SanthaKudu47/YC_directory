import { MdOutlineTitle } from "react-icons/md";
import MenuButton from "../menuButton";
import { useState } from "react";
import { block, titleData } from "../../types";

export default function TitleMenu({
  isBlockSelected,
  setBlockData,
  blockData = null,
}: {
  isBlockSelected: boolean;
  blockData: block | null;
  setBlockData: (param: titleData) => void;
}) {
  const initialContent =
    blockData === null ? "" : blockData.value === null ? "" : blockData.value;

  const [content, setContent] = useState(initialContent);
  const [editMode, setEditMode] = useState(false);
  const [type, setType] = useState<"large" | "medium" | "small">("large");

  const openForm = function (type: "large" | "medium" | "small") {
    setType(type);
    setContent(initialContent);
    setEditMode(!editMode);
  };

  const closeForm = function () {
    setBlockData({
      type: type,
      value: content,
    });
    setEditMode(false);
    setContent("");
  };

  return (
    <>
      <div className="h-[100px] rounded-xl bg-slate-900 flex justify-center items-center w-full">
        <div className=" flex flex-row gap-x-3 w-full justify-evenly items-center  text-white font-semibold text-[15px] px-2">
          {
            <>
              {isBlockSelected && editMode ? (
                <>
                  <div className="flex flex-col w-full px-2 gap-y-2 items-end">
                    <input
                      value={content}
                      onChange={(e) => {
                        setContent(e.target.value.toString());
                      }}
                      autoFocus
                      type="text"
                      className="font-medium text-[25px] text-white w-full bg-slate-900 focus:outline-none border border-solid border-gray-700 rounded-lg"
                    />
                    <button
                      className="rounded-md border-2 border-gray-500 border-solid py-1 px-3"
                      onClick={(e) => {
                        e.preventDefault();
                        closeForm();
                      }}
                    >
                      Done
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="flex w-full"
                    onClick={() => {
                      openForm("large");
                    }}
                  >
                    <MenuButton text="large">
                      <MdOutlineTitle size={32} color="white" />
                    </MenuButton>
                  </div>
                  <div
                    className="flex w-full"
                    onClick={() => {
                      openForm("medium");
                    }}
                  >
                    <MenuButton text="medium">
                      <MdOutlineTitle size={32} color="white" />
                    </MenuButton>
                  </div>

                  <MenuButton text="small">
                    <MdOutlineTitle size={32} color="white" />
                  </MenuButton>
                </>
              )}
            </>
          }
        </div>
      </div>
    </>
  );
}
