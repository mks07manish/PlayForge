require('dotenv').config();

module.exports = {
    baseUrl: process.env.BASE_URL,
    apiUrl: process.env.API_URL,
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    apiKey: process.env.API_KEY
};