'use strict';

const OrderFirebaseDao = require('../firebasePersistence/OrderFirebaseDao');

class FirebaseDaoFactory {

    getOrderDao() {
        return OrderFirebaseDao;
    }
}

module.exports =  FirebaseDaoFactory;