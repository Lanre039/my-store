const calcTotalPrice = (items) =>
  items.reduce((total, { price, quantity }) => total + quantity * price, 0);

export default calcTotalPrice;
