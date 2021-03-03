'use strict';

/**
 * Get all orders from database
 */
class GetAllOrders {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }

    async execute() {
        return await this.orderRepository.all();
    }
}

module.exports = GetAllOrders;
