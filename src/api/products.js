
const products = [
  {
    id: '1',
    name: 'HyperX Alloy Origins Core',
    description: 'Teclado mecánico compacto TKL con switches HyperX Red y retroiluminación RGB dinámica.',
    price: 319900, 
    imageUrl: '/img/teclado-1.png',
    category: 'mecánico',
    layout: 'TKL',
    switches: ['Red'],
  },
  {
    id: '2',
    name: 'Corsair K55 RGB',
    description: 'Teclado membrana con seis zonas de iluminación RGB y teclas multimedia dedicadas.',
    price: 199900, 
    imageUrl: '/img/teclado-2.png',
    category: 'membrana',
    layout: 'full-size',
  },
  {
    id: '3',
    name: 'Logitech G915 TKL',
    description: 'Teclado inalámbrico mecánico de baja altura con switches GL Tactile y LIGHTSYNC RGB.',
    price: 739900, 
    imageUrl: '/img/teclado-3.png',
    category: 'inalámbrico',
    layout: 'TKL',
    switches: ['Tactile'],
  },
  {
    id: '4',
    name: 'Razer Huntsman Mini',
    description: 'Teclado mecánico 60% con switches ópticos Razer y efecto de iluminación Chroma RGB.',
    price: 389900, 
    imageUrl: '/img/teclado-4.png',
    category: 'mecánico',
    layout: '60%',
    switches: ['Clicky'],
  },
  {
    id: '5',
    name: 'SteelSeries Apex 3',
    description: 'Teclado gaming resistente al agua IP32 con retroiluminación RGB personalizable.',
    price: 209900, 
    imageUrl: '/img/teclado-5.png',
    category: 'membrana',
    layout: 'full-size',
  },
  {
    id: '6',
    name: 'Keychron K6',
    description: 'Teclado mecánico inalámbrico 65% con Bluetooth y switches Gateron Hot-swappable.',
    price: 279900, 
    imageUrl: '/img/teclado-6.png',
    category: 'inalámbrico',
    layout: '65%',
    switches: ['Brown', 'Blue', 'Red'],
  },
];

// Simula llamada a API
export const getProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.find(p => p.id === id));
    }, 500);
  });
};
