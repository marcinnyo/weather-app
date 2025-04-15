const request = require('supertest');
const app = require('../src/app');

describe('GET /temperatures', () => {
  it('should get the current temperature of Budapest', async () => {
    const response = await request(app).get('/temperatures');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('temperature');
  });
});
