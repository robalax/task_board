// DroppableContainer.tsx
import React from "react";
import { useDrop } from "react-dnd";
import { Item } from "../../../types";

const ItemTypes = {
  ITEM: "item",
};

interface DroppableContainerProps {
  boxId: number;
  onDrop: (item: Item, boxId: number) => void;
  children: any;
}

const DroppableContainer: React.FC<DroppableContainerProps> = ({
  boxId,
  onDrop,
  children,
}) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.ITEM,
    drop: (item: any) => onDrop(item, boxId),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = isOver && canDrop;

  return (
    <div
      ref={drop}
      className={`p-4 border-2 border-dashed rounded ${
        isActive ? "border-green-400 bg-green-100" : "border-gray-300"
      }`}
    >
      {children}
    </div>
  );
};

export { DroppableContainer };
