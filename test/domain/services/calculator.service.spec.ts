import { CalculatorService } from '@src/domain/services/calculator.service';
import { Operation } from '@src/domain/entities/operation';

describe('Calculator Service', () => {
  let calculatorService: CalculatorService;

  beforeEach(() => {
    calculatorService = new CalculatorService();
  });

  it('should add two numbers', () => {
    const operation = new Operation(10, 5, '+');
    const result = calculatorService.calculate(operation);
    expect(result).toBe(15);
  });

  it('should subtract two numbers', () => {
    const operation = new Operation(10, 5, '-');
    const result = calculatorService.calculate(operation);
    expect(result).toBe(5);
  });

  it('should multiply two numbers', () => {
    const operation = new Operation(10, 5, '*');
    const result = calculatorService.calculate(operation);
    expect(result).toBe(50);
  });

  it('should divide two numbers', () => {
    const operation = new Operation(10, 5, '/');
    const result = calculatorService.calculate(operation);
    expect(result).toBe(2);
  });

  it('should throw an error when dividing by zero', () => {
    const operation = new Operation(10, 0, '/');
    expect(() => calculatorService.calculate(operation)).toThrowError('Division by zero');
  });
});
