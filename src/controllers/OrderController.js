'use strict';

const CreateOrder = require('../usescases/CreateOrder');
const CancelOrder = require('../usescases/CancelOrder');
const GetAllOrders = require('../usescases/GetAllOrders');
const GetAllOrdersByCustomer = require('../usescases/GetAllOrdersByCustomer');
const Order = require('../usescases/domain/Order');
const OrderRepository = require('../repositories/OrderRepository');
const FirebaseDaoFactory = require('../repositories/daoFactory/FirebaseDaoFactory');
const OrderFirebaseEntityMap = require('../repositories/mapEntities/OrderFirebaseEntityMap');
const SendEmailNodeMailer = require('../usescases/SendEmailNodeMailer');

class OrderController {
    constructor() {
        this.orderRepository = new OrderRepository(new FirebaseDaoFactory(), new OrderFirebaseEntityMap());
        this.SendEmailNodeMailer = new SendEmailNodeMailer();
    }

    createOrder(request, h) {
        const { id, code, datetime, customer, products, address, totalvalue, methodpayment, state, datetimeupdated, payment } = request.payload;
        const useCase = new CreateOrder(this.orderRepository, this.SendEmailNodeMailer);
        useCase.setOrder(new Order(id, code, datetime, customer, products, address, totalvalue, methodpayment, state, datetimeupdated, payment));
        const response = h.response({ "data": useCase.execute() }).code(201).type('application/json');
        response.header("Authorization", request.headers.authorization);
        return response;
    }

    cancelOrder(request, h) {
        const { id, code, datetime, customer, products, address, totalvalue, methodpayment, state, datetimeupdated, payment } = request.payload;
        const useCase = new CancelOrder(this.orderRepository, this.SendEmailNodeMailer);
        useCase.setOrder(new Order(id, code, datetime, customer, products, address, totalvalue, methodpayment, state, datetimeupdated, payment));
        const response = h.response({ "data": useCase.execute() }).code(200).type('application/json');
        response.header("Authorization", request.headers.authorization);
        return response;
    }

    async getAllOrders(request, h) {
        const useCase = new GetAllOrders(this.orderRepository);
        const response = h.response({ "data": await useCase.execute() }).code(200).type('application/json');
        response.header("Authorization", request.headers.authorization);
        return response;
    }

    async getAllOrdersByCustomer(request, h) {
        const customerId = request.params.id;
        const useCase = new GetAllOrdersByCustomer(this.orderRepository);
        useCase.setCustomerId(customerId);
        const response = h.response({ "data": await useCase.execute() }).code(200).type('application/json');
        response.header("Authorization", request.headers.authorization);
        return response;
    }
}

module.exports = OrderController;
