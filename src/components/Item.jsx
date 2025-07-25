import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ product }) => (
  <Card className="h-100">
    <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
    <Card.Body className="d-flex flex-column">
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>${product.price.toFixed(2)}</Card.Text>
      <Link to={`/product/${product.id}`} className="mt-auto btn btn-primary">
        Ver más
      </Link>
    </Card.Body>
  </Card>
);

export default Item;