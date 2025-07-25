React e‑Commerce – Teclados Gamer

Tienda de teclados gamer creada con React, Hooks y Context API. Permite explorar un catálogo de productos, ver detalles, gestionar un carrito de compras y realizar un checkout básico.

Características

Catálogo de productos (ItemListContainer, ItemList, Item)

Detalle de producto (ItemDetailContainer, ItemDetail, ItemQuantitySelector, AddItemButton)

Carrito de compras global (CartContext, CartWidget)

Resumen y checkout (Brief, Checkout)

Rutas gestionadas con React Router DOM

Estilos con React‑Bootstrap y Font Awesome

Tecnologías

React 18+ con Hooks

React Router DOM

React‑Bootstrap

Font Awesome

Context API

Vite como bundler

Instalación

git clone https://github.com/<tu-usuario>/react-ecommerce-teclados-gamer.git
cd react-ecommerce-teclados-gamer
npm install
npm run dev

Estructura del proyecto

src/
  api/                  # Mock de productos y fetch
    products.js
  components/           # Componentes reutilizables
    AddItemButton.jsx
    Brief.jsx
    CartWidget.jsx
    Checkout.jsx
    Item.jsx
    ItemDetail.jsx
    ItemDetailContainer.jsx
    ItemList.jsx
    ItemListContainer.jsx
    ItemQuantitySelector.jsx
    NavBar.jsx
  context/              # Context API para carrito
    CartContext.js
  pages/                # Vistas principales
    CartSummary.jsx
    Home.jsx
    ProductDetail.jsx
  App.jsx
  main.jsx
  index.css             # Estilos globales

Uso

Explora el catálogo en la página de inicio.

Haz clic en Ver más para ver el detalle de un producto.

Ajusta la cantidad y pulsa Añadir al carrito.

Accede al carrito con el ícono en la Navbar.

En la vista de carrito, revisa el resumen, elimina items o vacía el carrito.

Pulsa Confirmar compra para finalizar y vaciar el carrito.

Contribuciones

¡Pull requests y sugerencias son bienvenidas!

Licencia

MIT License