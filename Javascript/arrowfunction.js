const products = [
    { id: 1, name: "Laptop", price: 1000, inStock: true },
    { id: 2, name: "Mouse", price: 20, inStock: false },
    { id: 3, name: "Keyboard", price: 50, inStock: true },
    { id: 4, name: "Monitor", price: 300, inStock: false },
    { id: 5, name: "USB Cable", price: 10, inStock: true },
  ];

  const inStockProducts = products.filter(product => product.inStock);
  
  const productNames = inStockProducts.map(product => product.name);
  
  console.log("In-stock Product Names:", productNames);
  