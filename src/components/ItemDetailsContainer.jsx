import Container from "react-bootstrap/Container";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ItemContext } from "../contexts/ItemsContext";

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const { addItem } = useContext(ItemContext);

  useEffect(() => {
    const db = getFirestore();
    const ref = doc(db, "Items", id);

    getDoc(ref)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.error("Item not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching item:", error);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const onAdd = (quantity) => {
    if (item) {
      addItem({ ...item, quantity });
    } else {
      console.error("Item is null, cannot add");
    }
  };

  if (loading) return <p>Wait...</p>;

  if (!item) return <p>Item not found</p>;

  return (
    <Container className="mt-4">
      <ItemDetail item={item} onAdd={onAdd} />
    </Container>
  );
};
