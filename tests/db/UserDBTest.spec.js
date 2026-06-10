const { test, expect } = require('@playwright/test');

const UserRepository = require('../../database/UserRepository');

test('@db Verify User Exists', async () => {
    const userRepo = new UserRepository();
    const users =await userRepo.getUserByUsername('manish');
    expect(users.length).toBeGreaterThan(0);
    expect(users[0].username).toBe('manish');
});