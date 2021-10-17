// Lokijs in-memory javascript document oriented database
const loki = require("lokijs");
// Create db file
var db = new loki("db.json");
// Add products collection
var products = db.addCollection("products");
var session = db.addCollection("session");
// Auth token
// TODO: Replace with JWT auth logic
const authToken =
  "6BEC23F8C9B40B2DAD43693E5BF8926E0214D88000383E9CFC63050847CF1C1B";
// Insert initial session
session.insertOne({
  id: "session",
  balance: 0.0,
  token: "",
});
// Insert initial products
products.insert([
  {
    id: 0,
    product_id: "fizz",
    product_name: "Fizz",
    description:
      "An effervescent fruity experience with hints of grape and coriander.",
    cost: 1,
    quantity: 0,
  },
  {
    id: 1,
    product_id: "pop",
    product_name: "Pop",
    description: "An explosion of flavor that will knock your socks off!",
    cost: 1,
    quantity: 100,
  },
  {
    id: 2,
    product_id: "cola",
    product_name: "Cola",
    description:
      "A basic no nonsense cola that is the perfect pick me up for any occasion.",
    cost: 1,
    quantity: 200,
  },
  {
    id: 3,
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
  return await products.find({ quantity: { $gte: 0 } });
};

// Method to get product by id
const GetProduct = async (id) => {
  return await products.findOne({ product_id: id });
};

// Method to decrease product qty by id
const CheckoutProduct = async (id) => {
  var soldOut = false;
  await products.findAndUpdate({ product_id: id }, (product) => {
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
  await products.findAndUpdate({ product_id: product.product_id }, (entity) => {
    entity = product;
  });
  db.saveDatabase();
};

// Method to get session balance
const GetBalance = async () => {
  const _session = await session.findOne({ id: "session" });
  return _session.balance;
};

// Method to set session balance
const UpdateBalance = async (balance) => {
  await session.findAndUpdate({ id: "session" }, (p) => (p.balance = balance));
  db.saveDatabase();
};

// Metho to set session auth token
const SetAuthToken = async (token) => {
  await session.findAndUpdate({ id: "session" }, (p) => (p.token = token));
  db.saveDatabase();
};

// Method to auth user as admin
const AuthUser = async () => {
  const _session = await session.findOne({ id: "session" });
  return _session.token === authToken;
};

module.exports.GetProducts = GetProducts;
module.exports.GetProduct = GetProduct;
module.exports.CheckoutProduct = CheckoutProduct;
module.exports.UpdateProduct = UpdateProduct;
module.exports.GetBalance = GetBalance;
module.exports.UpdateBalance = UpdateBalance;
module.exports.SetAuthToken = SetAuthToken;
module.exports.AuthUser = AuthUser;
