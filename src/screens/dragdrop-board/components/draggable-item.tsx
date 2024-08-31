// DraggableItem.tsx
import React from "react";
import { useDrag } from "react-dnd";
import { PlusIconSvg } from "../../../svg";
import { Item } from "../../../types";

const ItemTypes = {
  ITEM: "item",
};

interface DraggableItemProps {
  item: Item;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ITEM,
    item: item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`rounded cursor-pointer ${isDragging ? "opacity-50" : ""}`}
    >
      <div
        className={`mb-2 bg-white border rounded shadow cursor-pointer flex items-center`}
      >
        <div className="flex items-center justify-center w-[50px] h-[50px]  bg-[#E5E6FC] rounded-l-sm  mr-4 text-[#7A84EA]">
          <span className="w-5 h-5">
            <PlusIconSvg />
          </span>
        </div>
        <div>
          <div className="font-semibold">{item.name}</div>
          <div className="text-sm text-gray-500">{item.category}</div>
        </div>
      </div>
    </div>
  );
};

export { DraggableItem };
