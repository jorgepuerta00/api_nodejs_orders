'use strict';

class IOrderRepository {
    constructor() {
     }

    save(order) {
        // To be overridden in concrete implementation
    }

    setState(order) {
        // To be overridden in concrete implementation
    }

    remove(order) {
        // To be overridden in concrete implementation
    }

    get(id) {
        // To be overridden in concrete implementation
    }

    async all() {
        // To be overridden in concrete implementation
    }

    async getAllOrdersByCustomer(customerId) {
        // To be overridden in concrete implementation
    }

    
}

module.exports = IOrderRepository;
