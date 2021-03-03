'use strict';

const admin = require('firebase-admin');
const serviceAccount = require('../../infraestructure/config/serviceAccountKey.json');

class FirebaseConnection {

    constructor() {
        try {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            });
        }
        catch (err) {
            console.log(err);
        }
    }

    getFirebaseContextDb() {
        try {
            return admin.firestore();
        }
        catch (err) {
            console.log(err);
            return undefined;
        }
    }
}

module.exports = FirebaseConnection