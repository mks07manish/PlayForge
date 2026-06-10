const mysql = require('mysql2/promise');
const config = require('../utils/ConfigReader');
const logger = require('../utils/Logger');

class DBConnection {
    static async getConnection() {
        logger.info('Creating database connection');
        return await mysql.createConnection({
            host: config.dbHost,
            user: config.dbUser,
            password: config.dbPassword,
            database: config.dbName
        });
    }
}

module.exports = DBConnection;