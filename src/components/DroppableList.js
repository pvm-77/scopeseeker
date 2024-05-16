import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
const ITEM_TYPE = 'VARIABLE'; // Define the constant
const DroppableList = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (item) => {
    // (droppedItem) => droppedItem.content === item.content);
    const isItemAlreadyDropped=droppedItems.some((droppedItem)=>droppedItem.content===item.content)
    // Handle dropped item
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
    <div
      ref={drop}
      style={{
        padding: '1rem',
        margin: '0.5rem',
        border: '1px solid #ddd',
        backgroundColor: isDropping ? 'lightgreen' : 'white', 
      }}
      className='flex'
    >
      <h4 className='text-md font-thin text-align-center'>Drop Zone</h4>
    <div className='flex flex-wrap flex-row '>
    {droppedItems.map((item) => (
        <p className='border-0 border-cyan-950 bg-orange-200 p-2 m-2 text-sm text-green-800 font-thin rounded-3xl ' key={item.id}>{item.content}</p>
      ))}
    </div>

    </div>
  );
};

export default DroppableList;
