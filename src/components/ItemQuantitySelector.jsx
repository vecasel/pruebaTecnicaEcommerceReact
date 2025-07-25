import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import AddItemButton from './AddItemButton';

const ItemQuantitySelector = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="d-flex align-items-center">
      <ButtonGroup>
        <Button variant="secondary" onClick={decrement}>-</Button>
        <Button variant="light" disabled>{quantity}</Button>
        <Button variant="secondary" onClick={increment}>+</Button>
      </ButtonGroup>
      <div className="ms-2">
        <AddItemButton product={product} quantity={quantity} />
      </div>
    </div>
  );
};

export default ItemQuantitySelector;
