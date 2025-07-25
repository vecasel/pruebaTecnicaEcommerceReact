import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getProducts } from '../api/products';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(data => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  return <ItemList products={products} />;
};

export default ItemListContainer;