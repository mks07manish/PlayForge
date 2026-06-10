const { test, expect } = require('@playwright/test');
const UserApi = require('../../api/UserApi');
const UserRepository = require('../../database/UserRepository');
const logger = require('../../utils/Logger');

test('@e2e Create User And Validate DB', async () => {
    const api = new UserApi();
    const repo = new UserRepository();
    const username ='manish_' + Date.now();
    const email =`${username}@test.com`;
    logger.info(`Creating user: ${username}`);
    await api.createUser(username,'SDET');
    logger.info(`Inserting user into DB: ${username}`);
    await repo.insertUser(username,email);
    const users = await repo.getUserByUsername(username);
    expect(users.length).toBeGreaterThan(0);
    expect(users[0].email).toBe(email);
    logger.info(`Deleting user: ${username}`);
    await repo.deleteUser(username);
    logger.info(`User deleted: ${username}`);
});