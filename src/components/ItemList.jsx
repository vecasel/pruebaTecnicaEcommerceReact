import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Item from './Item';

const ItemList = ({ products }) => (
  <Row>
    {products.map(product => (
      <Col key={product.id} xs={12} md={6} lg={4} className="mb-4">
        <Item product={product} />
      </Col>
    ))}
  </Row>
);

export default ItemList;