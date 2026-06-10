const ApiClient = require('./ApiClient');
const logger = require('../utils/Logger');

class UserApi {
    constructor() {
        this.apiClient = new ApiClient();
    }
    async createUser(name, job) {
        const payload = {
            name,
            job
        };
        logger.info(`Creating user: ${name}`);
        return await this.apiClient.post('/users', payload);
    }

    async getUser(id) {
        logger.info(`Fetching user: ${id}`);
        return await this.apiClient.get(`/users/${id}`);
    }

    async updateUser(id, name, job) {
        const payload = {
            name,
            job
        };
        logger.info(`Updating user: ${id}`);
        return await this.apiClient.put(`/users/${id}`, payload);
    }

    async deleteUser(id) {
        logger.info(`Deleting user: ${id}`);
        return await this.apiClient.delete(`/users/${id}`);
    }
}

module.exports = UserApi;