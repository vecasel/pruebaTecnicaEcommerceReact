import React from 'react';
import { Card } from 'react-bootstrap';
import ItemQuantitySelector from './ItemQuantitySelector';

const ItemDetail = ({ product }) => (
  <Card className="p-3">
    <div className="row">
      <div className="col-md-6">
        <Card.Img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="col-md-6">
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text><strong>Precio: </strong>${product.price.toFixed(2)}</Card.Text>
          <ItemQuantitySelector product={product} />
        </Card.Body>
      </div>
    </div>
  </Card>
);

export default ItemDetail;