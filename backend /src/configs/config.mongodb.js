require('dotenv').config();

const config = {
    app: {
        port: process.env.PORT || 3001
    },
    db: {
        mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/stayease'
    }
}

module.exports = config;