const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProductsById(id) {
  const product = products.find((product) => {
    return product.id === id;
  });

  if (!product) {
    throw new Error(`Product with ID ${id} not found.`);
  }

  return product;
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
}

function addNewReview(id, rating, comment) {
  const matchedProduct = getProductsById(id);

  const newReview = {
    rating,
    comment,
  };

  if (matchedProduct) {
    matchedProduct.reviews.push(newReview);
    return newReview;
  } else {
    throw new Error(`Product with ID ${id} not found.`);
  }
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductsById,
  addNewProduct,
  addNewReview,
};
