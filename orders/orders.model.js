const orders = [
  {
    id: 1,
    subtotal: 200,
    items: [
      {
        product: {
          id: 1,
          description: "Product 1",
          price: 1000,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
