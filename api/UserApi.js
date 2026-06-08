const ApiClient = require('./ApiClient');

class UserApi {
    constructor() {
        this.apiClient = new ApiClient();
    }
    async createUser(name, job) {
        const payload = {
            name,
            job
        };
        return await this.apiClient.post('/users', payload);
    }

    async getUser(id) {
        return await this.apiClient.get(`/users/${id}`);
    }

    async updateUser(id, name, job) {
        const payload = {
            name,
            job
        };
        return await this.apiClient.put(`/users/${id}`, payload);
    }

    async deleteUser(id) {
        return await this.apiClient.delete(`/users/${id}`);
    }
}

module.exports = UserApi;