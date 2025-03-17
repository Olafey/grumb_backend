const productExample = {
  id: 1,
  title: "wrist watch",
  category: "this is a leather wrist watch",
  price: "$400",
};

const productsExample = [];

const Addproduct = (req, res) => {
  res.json({
    message: "Products added",
  });
};

const getAllProducts = (req, res) => {
  try {
    const products = productExample; //get all products from MongoDB
    if (!products) {
      res.status(404).json({
        status : 'success'
        message: 'product fetched'
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  Addproduct,
  getAllProducts,
};
