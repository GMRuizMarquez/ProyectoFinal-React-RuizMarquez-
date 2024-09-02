import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import {
  getFirestore,
  getDocs,
  where,
  query,
  collection,
} from "firebase/firestore";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const ref = !id
      ? collection(db, "Items")
      : query(collection(db, "Items"), where("categoryId", "==", id));

    getDocs(ref)
      .then((snapshot) => {
        setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Wait...</p>;

  return (
    <Container className="mt-4">
      <ItemList items={items} />
    </Container>
  );
};
