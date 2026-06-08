const axios = require('axios');
const config = require('../utils/ConfigReader');

class ApiClient {
    constructor() {
        this.client = axios.create({
            baseURL: config.apiUrl,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': config.apiKey
            }
        });
    }

    async get(endpoint) {
        return await this.client.get(endpoint);
    }

    async post(endpoint, payload) {
        return await this.client.post(endpoint, payload);
    }

    async put(endpoint, payload) {
        return await this.client.put(endpoint, payload);
    }

    async delete(endpoint) {
        return await this.client.delete(endpoint);
    }
}

module.exports = ApiClient;