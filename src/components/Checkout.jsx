import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Brief from './Brief';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { clearCart, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const handleConfirm = () => {
    alert(`Gracias por tu compra. Total: $${getTotalPrice().toFixed(2)}`);
    clearCart();
    navigate('/');
  };

  return (
    <div>
      <h2>Resumen de tu compra</h2>
      <Brief />
      <div className="mt-3">
        <Button
          variant="success"
          onClick={handleConfirm}
          disabled={getTotalPrice() === 0}
        >
          Confirmar compra
        </Button>
      </div>
    </div>
  );
};

export default Checkout;