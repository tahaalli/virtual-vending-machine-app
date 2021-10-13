// Lokijs in-memory javascript document oriented database
const loki = require("lokijs");
// Create db file
var db = new loki("db.json");
// Add products collection
var users = db.addCollection("products");
// Insert initial products
users.insert([
  {
    product_id: "fizz",
    product_name: "Fizz",
    description:
      "An effervescent fruity experience with hints of grape and coriander.",
    cost: 1,
    quantity: 100,
  },
  {
    product_id: "pop",
    product_name: "Pop",
    description: "An explosion of flavor that will knock your socks off!",
    cost: 1,
    quantity: 100,
  },
  {
    product_id: "cola",
    product_name: "Cola",
    description:
      "A basic no nonsense cola that is the perfect pick me up for any occasion.",
    cost: 1,
    quantity: 200,
  },
  {
    product_id: "mega_pop",
    product_name: "Mega Pop",
    description:
      "Not for the faint of heart. So flavorful and so invigorating, it should probably be illegal.",
    cost: 1,
    quantity: 50,
  },
]);

// Method to get available products
const GetProducts = async () => {
  return await users.find({ quantity: { $gte: 0 } });
};

// Method to get product by id
const GetProduct = async (id) => {
  return await users.findOne({ product_id: id });
};

// Method to decrease product qty by id
const CheckoutProduct = async (id) => {
  var soldOut = false;
  await users.findAndUpdate({ product_id: id }, (product) => {
    if (product.quantity == 0) {
      soldOut = true;
      return;
    }
    product.quantity -= 1;
  });
  db.saveDatabase();
  return soldOut;
};

// Method to update product
const UpdateProduct = async (product) => {
  await users.findAndUpdate({ product_id: product.product_id }, (entity) => {
    entity = product;
  });
  db.saveDatabase();
};

module.exports.GetProducts = GetProducts;
module.exports.GetProduct = GetProduct;
module.exports.CheckoutProduct = CheckoutProduct;
module.exports.UpdateProduct = UpdateProduct;
