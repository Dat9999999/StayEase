'use strict';
const mongoose = require('mongoose');
const connectString = 'mongodb://localhost:27017/stayease';

class Database {
    constructor() {
        this.connect();
    }

    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }
        mongoose.connect(connectString)
            .then(() => {
                console.log('Connected to MongoDB');
            })
            .catch((err) => {
                console.error('Error connecting to MongoDB', err);
            });
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}
module.exports = Database.getInstance();