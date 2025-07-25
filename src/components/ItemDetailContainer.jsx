import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProductById } from '../api/products';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then(data => setProduct(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando detalles...</p>;
  if (!product) return <p>Producto no encontrado</p>;
  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;