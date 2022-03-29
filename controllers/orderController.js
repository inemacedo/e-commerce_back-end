const Order = require("../models/Order");

// Display a listing of the resource.
async function getAll(req, res) {
  try {
    const orders = await Order.findAll();
    if (orders) return res.json(orders);
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
}

// Display the specified resource.
async function getOne(req, res) {
  try {
    const order = await Order.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (order) return res.json(order);
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  getAll,
  getOne,
  store,
  update,
  destroy,
};
