import { useState } from "react";
import PropTypes from "prop-types";

export const ItemCount = ({ onAdd, quantity }) => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (count < quantity) setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const handleAdd = () => {
    onAdd(count);
    setCount(1);
  };

  return (
    <>
      <button onClick={handleIncrease}>+</button>
      <span>{count}</span>
      <button onClick={handleDecrease}>-</button>
      <br />
      <button onClick={handleAdd}>Comprar</button>
    </>
  );
};

ItemCount.propTypes = {
  onAdd: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};
