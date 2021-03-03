'use strict';

const OrderFirebaseEntity = require('../entities/OrderFirebaseEntity');
const Order = require('../../usescases/domain/Order');

const _serializeSingleOrderEntity = (entity) => {
    var firebaseEntity = new OrderFirebaseEntity(
        entity.id,
        entity.code,
        entity.datetime,
        entity.customer,
        entity.products,
        entity.address,
        entity.totalvalue,
        entity.methodpayment,
        entity.state,
        entity.datetimeupdated,
        entity.payment
    );
    return JSON.parse(JSON.stringify(firebaseEntity));
};

const _serializeSingleOrder = (entity) => {
    return new Order(
        entity.id,
        entity.code,
        entity.datetime,
        entity.customer,
        entity.products,
        entity.address,
        entity.totalvalue,
        entity.methodpayment,
        entity.state,
        entity.datetimeupdated,
        entity.payment
    );
}

module.exports = class OrderFirebaseEntityMap {
    serializeToEntity(data) {
        if (!data) {
            throw new Error('Invalid Data');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleOrderEntity);
        }
        return _serializeSingleOrderEntity(data);
    }

    serializeToOrder(data) {
        if (!data) {
            throw new Error('Invalid Data');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleOrder);
        }
        return _serializeSingleOrder(data);
    }
};
