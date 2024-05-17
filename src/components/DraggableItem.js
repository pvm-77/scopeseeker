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
      className='shadow-sm bg-red-800 text-white m-2 p-2 text-center rounded-sm '
      // style={{ opacity, padding: '0.5rem', margin: '0.5rem'}}
      onDragEnd={(e) => onDrop && onDrop(e.dataTransfer)}
    >
      {content}
    </li>
  );
};

export default DraggableItem;
