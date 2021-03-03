'use strict';

const IOrderDao = require('../interfaces/IOrderDao');
const FirebaseConnection = require('./FirebaseConnection');

class OrderFirebaseDao extends IOrderDao {

  constructor() {
    super();
    this.firebaseConnection = new FirebaseConnection();
    this.db = this.firebaseConnection.getFirebaseContextDb();
  }

  save(entity) {
    try {
      this.db.collection('orders').doc(entity.id).set(entity).then(function (docRef) {
        console.log("Document written with ID: ", entity.id);
      }).catch(function (error) {
        console.error("Error adding document: ", error);
      });
    }
    catch (err) {
      console.log(err);
    }
    return entity;
  }

  setState(entity) {
    try {
      this.db.collection('orders').doc(entity.id).update({ state: entity.state }).then(function (docRef) {
        console.log("Document updated with ID: ", entity.id);
      }).catch(function (error) {
        console.error("Error updating document: ", error);
      });
    }
    catch (err) {
      console.log(err);
    }
    return entity;
  }

  remove(id) {

  }

  get(id) {

  }

  async all() {

    var collection = [];
    let collectionsRef = this.db.collection('orders').orderBy('id');
    let allData = await collectionsRef.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          collection.push(doc.data());
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });

    return Promise.resolve(collection);
  }

  async getAllOrdersByCustomer(customerId) {
    var collection = [];
    let collectionsRef = this.db.collection('orders').where('customer.id', '==', customerId).orderBy('datetime', "desc");
    let allData = await collectionsRef.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          collection.push(doc.data());
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });

    return Promise.resolve(collection);
  }

}

const instance = new OrderFirebaseDao()
Object.freeze(instance);

module.exports = instance;
