"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_service_1 = require("@src/domain/services/calculator.service");
const operation_1 = require("@src/domain/entities/operation");
describe('Calculator Service', () => {
    let calculatorService;
    beforeEach(() => {
        calculatorService = new calculator_service_1.CalculatorService();
    });
    it('should add two numbers', () => {
        const operation = new operation_1.Operation(10, 5, '+');
        const result = calculatorService.calculate(operation);
        expect(result).toBe(15);
    });
    it('should subtract two numbers', () => {
        const operation = new operation_1.Operation(10, 5, '-');
        const result = calculatorService.calculate(operation);
        expect(result).toBe(5);
    });
    it('should multiply two numbers', () => {
        const operation = new operation_1.Operation(10, 5, '*');
        const result = calculatorService.calculate(operation);
        expect(result).toBe(50);
    });
    it('should divide two numbers', () => {
        const operation = new operation_1.Operation(10, 5, '/');
        const result = calculatorService.calculate(operation);
        expect(result).toBe(2);
    });
    it('should throw an error when dividing by zero', () => {
        const operation = new operation_1.Operation(10, 0, '/');
        expect(() => calculatorService.calculate(operation)).toThrowError('Division by zero');
    });
});
