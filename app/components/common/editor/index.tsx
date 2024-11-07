"use client";

import { useState } from "react";
import LayoutRow from "./row";
import ColumnMenu from "./menu/columnMenu";
import TitleMenu from "./menu/titleMenu";
import ElementMenu from "./menu/elementMenu";
import { block, metaDataOfaRow } from "./types";
import AddRowMenu from "./menu/rowMenu";
import { v4 as uuidv4 } from "uuid";

function generateInitialBlock(id: [string, number]) {
  const initialBlock: block = {
    id: id,
    value: "",
    decorations: null,
    elementType: null,
  };
  return initialBlock;
}

function generateInitialRow(): metaDataOfaRow {
  const id = uuidv4();
  return {
    id: id,
    layout: "col3",
    blocks: [
      generateInitialBlock([id, 0]),
      generateInitialBlock([id, 1]),
      generateInitialBlock([id, 2]),
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

  const { rowMenu, columnMenu } = menuStatus;

  function addNewRowOfBlocks(rowsCount = 1) {
    let currentRowCount = rowCount;
    const currentMetaData: metaDataOfaRow[] = [...data];
    for (let index = 0; index < rowsCount; index++) {
      const id = uuidv4();
      const blocks = [];
      for (let index = 0; index < 3; index++) {
        blocks.push(generateInitialBlock([id, index]));
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
    console.log(rowId);
    const remainingRows = data.filter((metaData, index) => {
      return metaData.id != rowId;
    });

    let newRowCount = rowCount - 1;
    if (newRowCount < 1) newRowCount = 0;
    setRowCount(newRowCount);
    setData(remainingRows);
    deselect();
  }

  function selectRow(id: number) {}

  function selectBlock(rowId: string, blockId: number) {
    if (rowId != selectedRow) {
      setSelectedRow(rowId);
    }

    console.log(rowId, blockId);
  }

  function deselect() {}

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
          newBlocks.push(generateInitialBlock([selectedRow, cols]));
        }

        meta.blocks = newBlocks;
      }
    });

    setData(updated);
  }

  console.log(data);

  return (
    <div className="flex flex-col min-w-[320px] w-full px-2  items-center bg-red-400 gap-y-3 py-2">
      <ElementMenu />
      <TitleMenu />
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
            />
          );
        })}
      </div>
    </div>
  );
}
