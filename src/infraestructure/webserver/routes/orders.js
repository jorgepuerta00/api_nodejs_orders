'use strict';

const JWT = require('jsonwebtoken');
const OrderController = require('../../../controllers/OrderController');
const ordersController = new OrderController();

module.exports = [
  {
    method: 'GET',
    path: '/api/token',
    config: {
      auth: false
    },
    handler: async (request, h) => {
      const people = {
        1: {
          id: 1,
          name: 'Jen Jones'
        }
      };
      const token = JWT.sign(people[1], 'NeverShareYourSecret');
      return h.response({
        token: token
      }).code(200).type('application/json');
    }
  },
  {
    method: "GET",
    path: "/",
    config: { auth: false },
    handler: async (request, h) => {
      return { text: 'Token not required' };
    }
  },
  {
    method: 'POST',
    path: '/api/orders',
    config: { auth: 'jwt' },
    handler: async (request, h) => ordersController.createOrder(request, h)
  },
  {
    method: 'PUT',
    path: '/api/orders',
    config: { auth: 'jwt' },
    handler: async (request, h) => ordersController.cancelOrder(request, h)
  },
  {
    method: 'GET',
    path: '/api/orders',
    config: { auth: 'jwt' },
    handler: async (request, h) => ordersController.getAllOrders(request, h)
  },
  {
    method: 'GET',
    path: '/api/orders/getAllOrdersByCustomer/{id}',
    config: { auth: 'jwt' },
    handler: async (request, h) => ordersController.getAllOrdersByCustomer(request, h)
  }
];
