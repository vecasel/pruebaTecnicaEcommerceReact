import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const CartWidget = ({ count }) => {
  return (
    <Link to="/cart" className="btn btn-outline-light position-relative">
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      {count > 0 && (
        <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
          {count}
        </Badge>
      )}
    </Link>
  );
};

export default CartWidget;
