const calcTotalPrice = (items) => {
  const totalPrice = items.reduce(
    (total, { price, quantity }) => total + quantity * price,
    0
  );
  return totalPrice.toFixed(2);
};

export default calcTotalPrice;
