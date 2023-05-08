const products = [
  { id: 1, description: "White shoe", price: 1000 },
  { id: 2, description: "Black tie", price: 2000 },
];

function getAllProducts() {
  return products;
}

module.exports = {
  getAllProducts,
};
