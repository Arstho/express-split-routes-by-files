module.exports.productsController = {
  getProducts: (req, res) => {
    res.send(["продукт1", "продукт2", "продукт3", "продукт4"]);
  },

  getProductsId: (req, res) => {
    res.json("Товар по ID: id представлен");
  },

  postProducts: (req, res) => {
    res.json("Товар успешно добавлен");
  },

  deleteProducts: (req, res) => {
    res.json("Товар успешно удален");
  },
};