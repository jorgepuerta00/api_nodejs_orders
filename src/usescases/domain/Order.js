'use strict';

class Order {
    constructor(id = null, code, datetime, customer, products, address, totalvalue, methodpayment, state, datetimeupdated, payment) {
        this.id = id;
        this.code = code;
        this.datetime = datetime;
        this.customer = customer;
        this.products = products;
        this.address = address;
        this.totalvalue = totalvalue;
        this.methodpayment = methodpayment;
        this.state = state;
        this.datetimeupdated = datetimeupdated;
        this.payment = payment;
    }
}
module.exports = Order;