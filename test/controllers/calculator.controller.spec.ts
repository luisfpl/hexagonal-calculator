import request from 'supertest';
import app from '../../src/app';

describe('Calculator Controller', () => {
  it('should return 15 for 10 + 5', async () => {
    const response = await request(app)
      .post('/api/calculate')
      .send({ operand1: 10, operand2: 5, operator: '+' });

    expect(response.status).toBe(200);
    expect(response.body.result).toBe(15);
  });

  it('should return 400 for invalid operator', async () => {
    const response = await request(app)
      .post('/api/calculate')
      .send({ operand1: 10, operand2: 5, operator: '%' });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Operator must be one of +, -, *, /');
  });
});
