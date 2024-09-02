import { Operation } from '../entities/operation';

export class CalculatorService {
  calculate(operation: Operation): number {
    switch (operation.operator) {
      case '+':
        return operation.operand1 + operation.operand2;
      case '-':
        return operation.operand1 - operation.operand2;
      case '*':
        return operation.operand1 * operation.operand2;
      case '/':
        if (operation.operand2 === 0) throw new Error('Division by zero');
        return operation.operand1 / operation.operand2;
      default:
        throw new Error('Invalid operator');
    }
  }
}
