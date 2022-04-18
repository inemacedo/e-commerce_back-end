const { Order, Product, User } = require("../models");

// Display a listing of the resource.
async function getAll(req, res) {
  try {
    if (req.user.role === "admin") {
      return res.json(
        await Order.findAll({
          include: { all: true, nested: true },
          order: [["createdAt", "DESC"]],
        }),
      );
    } else if (req.user.role === "user") {
      const orders = await Order.findAll({
        where: {
          userId: req.user.userID,
        },
      });
      return res.json(orders);
    }
  } catch (error) {
    return res.status(500).json([{ status: 500, msg: "Server error" }]);
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
async function store(req, res) {
  // TODO: el precio total deberia venir del back....
  // const calculateTotal = async (products) => {
  //   return products.reduce(async (acc, prod) => {
  //     const productPrice = (await Product.findByPk(prod.id)).price;
  //     return acc + productPrice * prod.quantity;
  //   }, 0);
  // };

  try {
    const user = await User.findByPk(req.user.userID);
    // const totalPrice = await calculateTotal(req.body.cart);
    // console.log(user);
    const order = await Order.create({
      userId: req.user.userID,
      products: req.body.cart,
      status: "PAGADO",
      address: user.address,
      paymentMethod: "Tarjeta VISA",
      totalPrice: req.body.total,
    });
    // console.log(totalPrice);
    if (order) return res.json(order);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, msg: "Server error" });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const order = await Order.findOne({
      where: {
        id: req.params.id,
      },
    });
    delete req.body.id;
    if (req.user.role === "user") {
      await order.update({
        status: "CANCELADO"
      });
    } else {
      await order.update(req.body);
    }
    return res.json({ status: 200, msg: "Ok" });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: "Server error" });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    const deleted = await Order.destroy({
      where: {
        id: req.params.id,
      },
    });
    console.log(deleted);
    if (deleted === 1) return res.json({ status: 200, msg: "Ok" });
    return res.json({ status: 200, msg: "Resource not found" });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: "Server error" });
  }
}

// Otros handlers...
// ...

module.exports = {
  getAll,
  getOne,
  store,
  update,
  destroy,
};
