import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const AddItemButton = ({ product, quantity }) => {
  const { addItem } = useContext(CartContext);

  const handleAdd = () => {
    if (quantity > 0) {
      addItem(product, quantity);
    }
  };

  return (
    <Button variant="primary" onClick={handleAdd} disabled={quantity <= 0}>
      Añadir al carrito
    </Button>
  );
};

export default AddItemButton;
