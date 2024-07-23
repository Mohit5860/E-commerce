import Product from "../models/Product.js";

const getProducts = async (req, res) => {
  try {
    const category = req.params.category;
    if (!category) return res.status(400).json(["Invalid request"]);

    const query = {
      gender: category,
    };

    if (req.query.type) {
      query.type = req.query.type;
    }
    console.log(query);
    // const priceFilters = req.query.filterByPrice;
    // if (priceFilters) {
    //   const priceQuery = Array.isArray(priceFilters)
    //     ? priceFilters.map((priceRange) => {
    //         const [minPrice, maxPrice] = priceRange.split("-").map(Number);
    //         return { price: { $gte: minPrice, $lte: maxPrice } };
    //       })
    //     : [priceFilters(priceFilters)];
    //   query.$or = priceQuery;
    // }

    const products = await Product.find(query);
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getProductbyId = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return res.status(400).json(["Invalid request"]);
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const addProduct = async (req, res) => {
  try {
    const { product } = req.body;
    const newProduct = new Product(product);
    const savedProduct = await newProduct.save();
    res.status(201).json({ message: "Product saved", product: savedProduct });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const top = async (req, res) => {
  try {
    const limit = 15;
    const products = await Product.find({ gender: "Men" }).limit(limit);
    console.log(products)
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error." });
  }
};

export { getProducts, getProductbyId, addProduct, top };
