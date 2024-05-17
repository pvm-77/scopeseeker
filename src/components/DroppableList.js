import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
const ITEM_TYPE = 'VARIABLE'; // Define the constant
const DroppableList = ({scope}) => {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (item) => {
    const isItemAlreadyDropped = droppedItems.some((droppedItem) => droppedItem.id === item.id)

    if (isItemAlreadyDropped) {
      console.log('can not drop buddy ');
      alert('you cant bcz: already in there');
      return;

    }
    setDroppedItems((prevItems) => [...prevItems, item]);
  };

  const [{ isDropping }, drop] = useDrop(() => ({
    accept: ITEM_TYPE, // Only accept items of the defined type
    drop: handleDrop,
    collect: (monitor) => ({
      isDropping: monitor.isOver(),
    }),
  }));




  return (
    <div ref={drop} className={`min-w-80 shadow-2xl hover:shadow-3xl rounded-sm bg-teal-800 text-white flex mx-2 my-1 px-4 py-2  ${isDropping}?'bg-green-800':'bg-white-800'`}>
      <h4 className='text-md font-thin text-align-center'>{scope} scope</h4>

      <div className='flex flex-wrap flex-row '>
        {droppedItems.map((item) => (
          <p className=' h-10 shadow-sm bg-red-800 text-white m-2 p-2 text-center rounded-sm ' key={item.id}>{item.content}</p>
        ))}
      </div>

    </div>
  );
};

export default DroppableList;
