import React from 'react';
import { useDrag } from 'react-dnd';

const ITEM_TYPE = 'VARIABLE';

const DraggableItem = ({ id, content, onDrop }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ITEM_TYPE,
    item: { id, content },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const opacity = isDragging ? 0.5 : 1;

  return (
    <li
      ref={drag}
      draggable
      className=' border-0 border-cyan-950 bg-orange-200 text-sm text-green-800 font-thin rounded-3xl'
      style={{ opacity, padding: '0.5rem', margin: '0.5rem',  cursor: 'grab' }}
      onDragEnd={(e) => onDrop && onDrop(e.dataTransfer)}
    >
      {content}
    </li>
  );
};

export default DraggableItem;
