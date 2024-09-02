import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Asegúrate de importar PropTypes

export const ItemContext = createContext();

export const Provider = ({ children }) => {
  const [items, setItems] = useState([]);

  const reset = () => setItems([]);

  const addItem = (item) => {
    const alreadyExist = items.some((i) => i.id === item.id);

    if (alreadyExist) {
      const newItems = items.map((i) => {
        if (i.id === item.id) {
          return { ...i, quantity: i.quantity + item.quantity };
        } else {
          return i;
        }
      });
      setItems(newItems);
    } else {
      setItems((prev) => [...prev, item]);
    }
  };

  const removeItems = (id) => {
    const filter = items.filter((i) => i.id !== id);
    setItems(filter);
  };
  console.log(items);

  return (
    <ItemContext.Provider value={{ addItem, items, removeItems, reset }}>
      {children}
    </ItemContext.Provider>
  );
};
Provider.propTypes = {
  children: PropTypes.node.isRequired, // Asegúrate de que children sea un nodo de React
};
