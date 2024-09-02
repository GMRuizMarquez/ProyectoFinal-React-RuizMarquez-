import PropTypes from "prop-types";
import { ItemCount } from "./ItemCount";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

export const ItemDetail = ({ item, onAdd }) => {
  return (
    <Container className="mt-5">
      <Card className="shadow-lg">
        <Row className="no-gutters">
          <Col md={6}>
            <Image
              src={item.imageId}
              alt={item.title}
              className="img-fluid rounded-start"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </Col>
          <Col md={6}>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title className="display-4">{item.title}</Card.Title>
                <Card.Subtitle className="text-muted mb-3">
                  {item.categoryId}
                </Card.Subtitle>
                <Card.Text className="lead">{item.description}</Card.Text>
              </div>
              <div>
                <h5 className="mb-3">
                  Fecha de vencimiento: {item.expiration_date}
                </h5>
                <h4 className="mb-4 text-primary">
                  <strong>${item.price}</strong>
                </h4>
                <h5 className="mb-4">
                  <strong>Cantidad disponible: {item.quantity}</strong>
                </h5>
                <ItemCount quantity={item.quantity} onAdd={onAdd} />
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    categoryId: PropTypes.string.isRequired,
    expiration_date: PropTypes.string.isRequired,
    imageId: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
};
