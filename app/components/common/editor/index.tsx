"use client";

import { useState } from "react";
import LayoutRow from "./row";
import ColumnMenu from "./menu/columnMenu";
import TitleMenu from "./menu/titleMenu";
import ElementMenu from "./menu/elementMenu";
import { block, elementType, metaDataOfaRow, titleData } from "./types";
import AddRowMenu from "./menu/rowMenu";
import { v4 as uuidv4 } from "uuid";

function generateInitialBlock(id: [string, string]) {
  const initialBlock: block = {
    id: id,
    value: "",
    decorations: null,
    elementType: null,
  };
  return initialBlock;
}

function generateInitialRow(): metaDataOfaRow {
  const rowId = uuidv4();
  const blockId1 = uuidv4();
  const blockId2 = uuidv4();
  const blockId3 = uuidv4();
  return {
    id: rowId,
    layout: "col3",
    blocks: [
      generateInitialBlock([rowId, blockId1]),
      generateInitialBlock([rowId, blockId2]),
      generateInitialBlock([rowId, blockId3]),
    ],
  };
}

export default function TextEditor() {
  const [rowCount, setRowCount] = useState<number>(1);
  const [menuStatus, setMenuStatus] = useState({
    rowMenu: false,
    titleMenu: false,
    elementMenu: false,
    columnMenu: false,
  });
  const [data, setData] = useState<metaDataOfaRow[]>([generateInitialRow()]);
  const [selectedRow, setSelectedRow] = useState<string>("");
  const [selectedBlock, setSelectedBlock] = useState<string>("");
  const [content, setContent] = useState("");

  const { rowMenu, columnMenu } = menuStatus;
  const isBlockSelected = selectedRow != "" && selectedBlock != "";

  function addNewRowOfBlocks(rowsCount = 1) {
    let currentRowCount = rowCount;
    const currentMetaData: metaDataOfaRow[] = [...data];
    for (let index = 0; index < rowsCount; index++) {
      const id = uuidv4();
      const blocks = [];
      for (let index = 0; index < 3; index++) {
        const blockId = uuidv4();
        blocks.push(generateInitialBlock([id, blockId]));
      }
      const newRow: metaDataOfaRow = {
        id: id,
        layout: "col3",
        blocks: blocks,
      };
      currentRowCount++;
      currentMetaData.push(newRow);
    }
    setRowCount(currentRowCount);
    setData(currentMetaData);
  }

  function removeSelectedRow(rowId: string) {
    const remainingRows = data.filter((metaData, index) => {
      return metaData.id != rowId;
    });

    let newRowCount = rowCount - 1;
    if (newRowCount < 1) newRowCount = 0;
    setRowCount(newRowCount);
    setData(remainingRows);
    deselect(rowId);
  }

  function selectBlock(rowId: string, blockId: string) {
    if (rowId != selectedRow) {
      setSelectedRow(rowId);
    }
    setSelectedBlock(blockId);
  }

  function deselect(rowId: string) {
    if (rowId === selectedRow) {
      setSelectedRow("");
    }
  }

  function menuOneHandler(rowId: string) {
    const current = { ...menuStatus, columnMenu: !columnMenu };
    setSelectedRow(rowId);
    setMenuStatus(current);
  }

  function resetLayout(cols: number) {
    const updated = [...data];
    updated.forEach((meta, index) => {
      if (selectedRow === meta.id) {
        const newBlocks: block[] = [];
        for (let index = 0; index < cols; index++) {
          const blockId = uuidv4();
          newBlocks.push(generateInitialBlock([selectedRow, blockId]));
        }

        meta.blocks = newBlocks;
      }
    });

    setData(updated);
  }

  function setTitleContentForBlock(titleData: titleData) {
    const updatedMetaData: metaDataOfaRow[] = [...data];
    updatedMetaData.forEach((meta, index) => {
      for (let index = 0; index < meta.blocks.length; index++) {
        const block = meta.blocks[index];
        if (block.id[1] === selectedBlock && block.id[0] === selectedRow) {
          const element: elementType =
            titleData.type === "large"
              ? "HEADER_LARGE"
              : titleData.type === "medium"
              ? "HEADER_MEDIUM"
              : "HEADER_SMALL";

          block.elementType = element;
          block.value = titleData.value;
        }
      }
    });
    setData(updatedMetaData);
  }

  function getBlockData() {
    for (let index = 0; index < data.length; index++) {
      const row = data[index];
      if (row.id === selectedRow) {
        for (let index = 0; index < row.blocks.length; index++) {
          const block = row.blocks[index];
          if (block.id[1] === selectedBlock) {
            return block;
          }
        }
      }
    }
    return null;
  }

  return (
    <div className="flex flex-col min-w-[320px] w-full px-2  items-center bg-red-400 gap-y-3 py-2">
      <ElementMenu />
      <TitleMenu
        isBlockSelected={isBlockSelected}
        setBlockData={setTitleContentForBlock}
        blockData={getBlockData()}
      />
      <AddRowMenu handler={addNewRowOfBlocks} />
      <ColumnMenu layoutHandler={resetLayout} />

      <div className="relative h-[500px] w-full rounded-xl  bg-black flex flex-col p-2 gap-y-2">
        {data.map((meta, index) => {
          const { blocks, layout, id } = meta;
          return (
            <LayoutRow
              key={index}
              handler={menuOneHandler}
              layout={layout}
              blocks={blocks}
              rowId={id}
              selectedId={selectedRow}
              removeSelectedRow={removeSelectedRow}
              selectBlockHandler={selectBlock}
              selectedBlockId={selectedBlock}
            />
          );
        })}
      </div>
    </div>
  );
}
