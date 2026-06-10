const DBConnection = require('./DBConnection');
const logger = require('../utils/Logger');

class UserRepository {
    async getUserByUsername(username) {
        const connection = await DBConnection.getConnection();
        const [rows] =await connection.execute(
                'SELECT * FROM users WHERE username=?',
                [username]
            );
        logger.info(`User found: ${rows.length}`);
        await connection.end();
        return rows;
    }
    async insertUser(username,email) {
        const connection = await DBConnection.getConnection();
        logger.info(`Inserting user: ${username}`);
        const [result] = await connection.execute(
                'INSERT INTO users(username,email) VALUES(?,?)',
                [username,email]
            );
        await connection.end();
        return result;
    }

    async deleteUser(username) {
        const connection = await DBConnection.getConnection();
        logger.info(`Deleting user: ${username}`);
        const [result] = await connection.execute(
                'DELETE FROM users WHERE username=?',
                [username]
            );
        await connection.end();
        return result;
    }
}

module.exports = UserRepository;