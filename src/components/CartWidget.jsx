import box from "../assets/box.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ItemContext } from "../contexts/ItemsContext";

export const CartWidget = () => {
  const { items } = useContext(ItemContext);

  const quantity = items.reduce((acc, act) => acc + act.quantity, 0);

  return (
    <Link to="/Cart">
      <img src={box} alt="Icono de una caja" height={24} /> {quantity}
    </Link>
  );
};
