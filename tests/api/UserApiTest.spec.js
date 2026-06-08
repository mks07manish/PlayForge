const { test, expect } = require('@playwright/test');
const UserApi = require('../../api/UserApi');
const logger = require('../../utils/Logger');

test('@api Create User', async () => {
    const userApi = new UserApi();
    const response = await userApi.createUser(
        'Manish',
        'SDET'
    );
    logger.info(`Response Status : ${response.status}`);
    expect(response.status).toBe(201);
    expect(response.data.name)
        .toBe('Manish');
    expect(response.data.job)
        .toBe('SDET');
});

test('@api Get User', async () => {
    const userApi = new UserApi();
    const response = await userApi.getUser(2);
    logger.info(`Response Status : ${response.status}`);
    expect(response.status).toBe(200);
    expect(response.data.data.id).toBe(2);
});

test('@api Update User', async () => {
    const userApi = new UserApi();
    const response =
        await userApi.updateUser(
            2,
            'Manish',
            'Senior SDET'
        );
    logger.info(`Response Status : ${response.status}`);
    expect(response.status).toBe(200);
    expect(response.data.job)
        .toBe('Senior SDET');
});

test('@api Delete User', async () => {
    const userApi = new UserApi();
    const response = await userApi.deleteUser(2);
    logger.info(`Response Status : ${response.status}`);
    expect(response.status).toBe(204);
});