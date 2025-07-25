import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const Brief = () => {
  const { cartItems, getTotalPrice, removeItem, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <p>No hay productos en el carrito.</p>;
  }

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Subtotal</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.quantity * item.price).toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <h5>Total: ${getTotalPrice().toFixed(2)}</h5>
        <button className="btn btn-secondary" onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>
    </>
  );
};

export default Brief;