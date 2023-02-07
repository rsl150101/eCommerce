const OrderRepository = require('../repositories/orders.repository');
const { Order } = require('../models');

class OrderSevice {
  OrderRepository = new OrderRepository(Order);
}

module.exports = OrderSevice;
