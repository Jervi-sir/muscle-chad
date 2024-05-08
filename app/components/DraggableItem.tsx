import React, { useState } from 'react';

const DraggableItem = ({ top, left, children }) => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ top, left });

  const handleMouseDown = (e) => {
    setDragging(true);
    const initialPosition = {
      x: e.clientX - position.left,
      y: e.clientY - position.top,
    };
    const handleMouseMove = (e) => {
      if (dragging) {
        const newPosition = {
          top: e.clientY - initialPosition.y,
          left: e.clientX - initialPosition.x,
        };
        setPosition(newPosition);
      }
    };
    const handleMouseUp = () => {
      setDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      console.log('New Position:', position);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        cursor: 'move',
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

export default DraggableItem;
