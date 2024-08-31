import React, { useState } from "react";
import { Box, Item } from "../../types/dragdrop";
import { DroppableContainer, DraggableItem } from "./components";
import {
  CrossIconSvg,
  LikeIconSvg,
  LeftIconSvg,
  RightIconSvg,
} from "../../svg";

const DragdropBoard = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "item1", category: "category1" },
    { id: 2, name: "item2", category: "category1" },
    { id: 3, name: "item3", category: "category1" },
    { id: 4, name: "item4", category: "category2" },
  ]);

  const [boxes, setBoxes] = useState<Box[]>([]);

  const [secondColumnBoxes, setSecondColumnBoxes] = useState<Box[]>([]);

  const onDelete = (id: number) => {
    const list = boxes;
    list.splice(id, 1);
    setBoxes(list);
  };

  const onBoxDelete = (id: number) => {
    const updatedBoxes = boxes.filter((_, index) => index !== id);
    setBoxes(updatedBoxes);
  };

  const onSecondColumnBoxDelete = (id: number) => {
    const updatedBoxes = secondColumnBoxes.filter((_, index) => index !== id);
    setSecondColumnBoxes(updatedBoxes);
  };

  const addBox = () => {
    setBoxes((prevState) => [
      ...prevState,
      {
        name: `Box Name ${prevState.length + 1}`,
        items: [],
      },
    ]);
  };

  const handleDrop = (item: Item, boxId: number) => {
    const updatedBoxes = secondColumnBoxes.filter((box, index) => {
      if (index == boxId) {
        box.items.push(item);
      }
      return box;
    });
    setSecondColumnBoxes(updatedBoxes);
    console.log("items", items);
    const updatedItems = items.filter(
      (itemRecord) => itemRecord.id !== item.id
    );
    setItems(updatedItems);
  };

  const moveBoxToSecondColumn = (box: Box, index: number) => {
    onBoxDelete(index);
    setSecondColumnBoxes((prevState) => [...prevState, box]);
  };

  const moveBoxToThirdColumn = (box: Box, index: number) => {
    onSecondColumnBoxDelete(index);
    setBoxes((prevState) => [...prevState, box]);
  };

  return (
    <div className="flex h-screen p-4 space-x-4 bg-gray-100">
      {/* First Column */}
      <div className="w-1/3 p-4 bg-gray-200 rounded">
        <div className="text-gray-700 font-semibold mb-4">
          number of items : {items.length}
        </div>

        {items.map((item) => (
          <DraggableItem item={item} />
        ))}
      </div>

      {/* Second Column */}
      <div className="w-1/3 p-4 bg-white rounded shadow">
        <div className="text-gray-700 font-semibold mb-4">focus Column</div>
        {secondColumnBoxes.map((box: Box, index: number) => {
          return (
            <div className="p-4 border rounded mb-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <span
                    onClick={() => moveBoxToThirdColumn(box, index)}
                    className="w-4 mr-2 cursor-pointer pr-8"
                  >
                    <RightIconSvg />
                  </span>
                  {box.name}
                </div>
              </div>
              <DroppableContainer onDrop={handleDrop} boxId={index}>
                {box.items.map((item) => (
                  <div
                    className={`bg-white border rounded shadow cursor-pointer flex items-center `}
                  >
                    <div
                      className="flex items-center justify-center w-[50px] h-[50px]  bg-[#FDDBD2] rounded-l-sm  mr-4"
                      onClick={() => onDelete(index)}
                    >
                      <span className="w-5 h-5">
                        <CrossIconSvg />
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm text-gray-500">
                        {item.category}
                      </div>
                    </div>
                  </div>
                ))}
              </DroppableContainer>
            </div>
          );
        })}
      </div>

      {/* Third Column */}
      <div className="w-1/3 p-4 bg-gray-200 rounded">
        <div className="flex justify-between items-center mb-4">
          <div className="text-gray-700 font-semibold">
            number of boxes: {boxes.length}
          </div>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={addBox}
          >
            + Add Box
          </button>
        </div>
        {boxes.map((box, index) => (
          <div key={index} className="mb-4 p-4 bg-white rounded shadow">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span
                  onClick={() => moveBoxToSecondColumn(box, index)}
                  className="w-4 mr-2 cursor-pointer pr-8"
                >
                  <LeftIconSvg />
                </span>
                {box.name}
              </div>

              <div>
                <button
                  className="text-white bg-red-500 p-1 w-6 rounded-sm font-bold"
                  onClick={() => onBoxDelete(index)}
                >
                  x
                </button>
              </div>
            </div>
            {box.items.map((item) => (
              <div
                className={`bg-white border rounded shadow cursor-pointer flex items-center `}
              >
                <div className="flex items-center justify-center w-[50px] h-[50px]  bg-[#FAFAFA] rounded-l-sm  mr-4">
                  <span className="w-8 h-8">
                    <LikeIconSvg />
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.category}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export { DragdropBoard };
