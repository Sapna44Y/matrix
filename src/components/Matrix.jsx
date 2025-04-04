import { useState } from "react";

const Matrix = () => {
  const size = 3;
  const totalCells = size * size;
  const [clickedOrder, setClickedOrder] = useState([]);
  const [colors, setColors] = useState(Array(totalCells).fill("bg-gray-400"));

  const handleClick = (index) => {
    if (clickedOrder.includes(index)) return; // Prevent multiple clicks

    const newOrder = [...clickedOrder, index];
    setClickedOrder(newOrder);

    const newColors = [...colors];
    newColors[index] = "bg-green-600";
    setColors(newColors);

    if (newOrder.length === totalCells) {
      animateFinalColors(newOrder);
    }
  };

  const animateFinalColors = (order) => {
    order.forEach((idx, i) => {
      setTimeout(() => {
        setColors((prev) => {
          const updated = [...prev];
          updated[idx] = "bg-orange-600";
          return updated;
        });
      }, i * 500);
    });
  };

  return (
    <div className="grid grid-cols-3 gap-2 border-solid border-8 rounded-md">
      {Array.from({ length: totalCells }).map((_, index) => (
        <div
          key={index}
          className={`w-24 h-24 ${colors[index]} flex items-center justify-center rounded-lg shadow-md cursor-pointer transition-all duration-200`}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Matrix;
