import { Request, Response } from 'express';
import { CalculatorService } from '../domain/services/calculator.service';
import { Operation } from '../domain/entities/operation';
import { validateParams } from '../utils/validate-params';
import { CustomError } from '../utils/custom-error';

export class CalculatorController {
  private calculatorService = new CalculatorService();

  public calculate(req: Request, res: Response): void {
    try {
      const { operand1, operand2, operator } = req.body;
      validateParams(operand1, operand2, operator);
      const operation = new Operation(operand1, operand2, operator);
      const result = this.calculatorService.calculate(operation);
      res.json({ result });
    } catch (error) {
      if (error instanceof CustomError) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
}
