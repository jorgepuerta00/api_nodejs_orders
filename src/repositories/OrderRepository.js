'use strict';

const IOrderRepository = require('../usescases/repository/IOrderRepository');

class OrderRepository extends IOrderRepository {

    constructor(orderDaoFactory, orderEntityMap) {
        super();
        this.orderDaoFactory = orderDaoFactory;
        this.orderEntityMap = orderEntityMap;
    }

    save(order) {
        const entity = this.orderEntityMap.serializeToEntity(order);
        const source = this.orderDaoFactory.getOrderDao();   
        return source.save(entity);
    }

    setState(order) {
        const entity = this.orderEntityMap.serializeToEntity(order);
        const source = this.orderDaoFactory.getOrderDao();   
        return source.setState(entity);
    }

    remove(id) {
     
    }

    async get(id) {
      
    }

    async all() {
        const source = this.orderDaoFactory.getOrderDao();   
        return  this.orderEntityMap.serializeToOrder(await source.all());
    }

    async getAllOrdersByCustomer(customerId) {
        const source = this.orderDaoFactory.getOrderDao();   
        return  this.orderEntityMap.serializeToOrder(await source.getAllOrdersByCustomer(customerId));
    }
}

module.exports = OrderRepository;
