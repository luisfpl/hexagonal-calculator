"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../src/app"));
describe('Calculator Controller', () => {
    it('should return 15 for 10 + 5', async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .post('/api/calculate')
            .send({ operand1: 10, operand2: 5, operator: '+' });
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(15);
    });
    it('should return 400 for invalid operator', async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .post('/api/calculate')
            .send({ operand1: 10, operand2: 5, operator: '%' });
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Operator must be one of +, -, *, /');
    });
});
