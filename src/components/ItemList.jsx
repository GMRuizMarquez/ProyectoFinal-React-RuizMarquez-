import { Item } from "./Item";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";

export const ItemList = ({ items }) => {
  return (
    <Row className="d-flex flex-wrap justify-content-around">
      {items.map((item) => (
        <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
          <Item item={item} />
        </Col>
      ))}
    </Row>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      categoryId: PropTypes.string.isRequired,
      expiration_date: PropTypes.string.isRequired,
      imageId: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantityId: PropTypes.number.isRequired,
    })
  ).isRequired,
};
