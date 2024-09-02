import { CustomError } from './custom-error';

export function validateParams(operand1: any, operand2: any, operator: string): void {
  if (typeof operand1 !== 'number' || typeof operand2 !== 'number') {
    throw new CustomError('Operands must be numbers');
  }
  if (!['+', '-', '*', '/'].includes(operator)) {
    throw new CustomError('Operator must be one of +, -, *, /');
  }
}
