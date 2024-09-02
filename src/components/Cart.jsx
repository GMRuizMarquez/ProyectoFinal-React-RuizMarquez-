import { useContext, useState } from "react";
import { ItemContext } from "../contexts/ItemsContext";
import { Container } from "react-bootstrap";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

const initialValues = {
  phone: "",
  email: "",
  name: "",
};

export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues);

  const { items, removeItems, reset } = useContext(ItemContext);

  const handleChange = (ev) => {
    setBuyer((prev) => {
      return { ...prev, [ev.target.name]: ev.target.value };
    });
  };

  const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

  const sendOrder = () => {
    const order = {
      buyer,
      items,
      total,
    };

    const db = getFirestore();
    const orderCollecction = collection(db, "orders");

    addDoc(orderCollecction, order)
      .then(({ id }) => {
        if (id) {
          alert("Su orden: " + id + "ha sido completada!");
        }
      })
      .finally(() => {
        reset();
        setBuyer(initialValues);
      });
  };

  if (items.length === 0) return "Ve a la home";

  return (
    <Container className="my-4 p-4 border rounded bg-light">
      <Button variant="danger" onClick={reset} className="mb-4">
        Vaciar
      </Button>
      {items.map((item) => (
        <div
          key={item.id}
          className="mb-4 p-3 border rounded bg-white shadow-sm"
        >
          <h1 className="h4 mb-2">{item.title}</h1>
          <img
            src={item.imageId}
            height={300}
            alt={item.title}
            className="img-fluid mb-2 rounded"
          />
          <p className="mb-2">Cantidad: {item.quantity}</p>
          <Button variant="outline-danger" onClick={() => removeItems(item.id)}>
            Eliminar producto
          </Button>
        </div>
      ))}
      <hr className="my-4" />
      <div className="mb-4">
        <h2>Total: ${total}</h2>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={buyer.name}
            name="name"
            onChange={handleChange}
            placeholder="Ingrese su nombre"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            value={buyer.phone}
            name="phone"
            onChange={handleChange}
            placeholder="Ingrese su teléfono"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={buyer.email}
            name="email"
            onChange={handleChange}
            placeholder="Ingrese su email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            value={buyer.address}
            name="address"
            onChange={handleChange}
            placeholder="Ingrese su dirección"
          />
        </Form.Group>
        <Button variant="success" type="button" onClick={sendOrder}>
          Comprar
        </Button>
      </Form>
    </Container>
  );
};
