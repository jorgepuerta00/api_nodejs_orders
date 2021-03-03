'use strict';

/**
 * Get all orders from database
 */
class GetAllOrdersByCustomer {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }

    setCustomerId(customerId) {
        this.customerId = customerId;
    }

    async execute() {
        return await this.orderRepository.getAllOrdersByCustomer(this.customerId);
    }
}

module.exports = GetAllOrdersByCustomer;
