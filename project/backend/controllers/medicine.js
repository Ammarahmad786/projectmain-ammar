import products from "../data/products.js";
export const getmedicineall = (req, res) => {
  res.json(products);
};
export const getmedicinebyId = (req, res) => {
  const { id } = req.params;
  const medicine = products.find((value) => value._id === id);
  if (medicine) {
    res.json(medicine);
  }
  res.statusCode = 404;
  res.json("Medicine failed in loading");
};
