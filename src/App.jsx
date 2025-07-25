import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


// Importa tus componentes y páginas
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartSummary from './pages/CartSummary';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartSummary />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
