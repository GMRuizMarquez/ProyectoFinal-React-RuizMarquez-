import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

export const Item = ({ item }) => {
  return (
    <Card
      className="text-center"
      style={{
        width: "18rem",
        height: "30rem",
        margin: "20px",
        borderRadius: "1.5rem",
        boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
        border: "2px solid #4caf50",
        backgroundColor: "#e8f5e9",
      }}
    >
      <Card.Img
        variant="top"
        src={item.imageId}
        style={{
          borderTopLeftRadius: "1.5rem",
          borderTopRightRadius: "1.5rem",
          height: "220px",
          objectFit: "cover",
          borderBottom: "5px solid #4caf50",
        }}
      />
      <Card.Body>
        <Card.Title className="mb-2 text-success">{item.title}</Card.Title>
        <Card.Text className="text-muted mb-2">${item.price}</Card.Text>
        <Card.Text className="text-muted mb-2">
          Vence: {item.expiration_date}
        </Card.Text>
        <Card.Text className="text-muted mb-2">
          Cantidad: {item.quantity}
        </Card.Text>
        <Card.Text className="text-muted mb-2">
          Categoría: {item.categoryId}
        </Card.Text>
        <Link to={`/item/${item.id}`}>
          <Button
            variant="success"
            className="mt-3 "
            style={{ backgroundColor: "#4caf50", borderColor: "#4caf50" }}
          >
            Ver
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    categoryId: PropTypes.string.isRequired,
    expiration_date: PropTypes.string.isRequired,
    imageId: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
