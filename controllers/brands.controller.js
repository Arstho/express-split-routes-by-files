module.exports.brandsController = {
  getBrands: (req, res) => {
    res.send("бренд добавлен");
  },

  postBrands: (req, res) => {
    res.send("бренд изменен");
  },

  deleteBrands: (req, res) => {
    res.send("бренд удален");
  },
};