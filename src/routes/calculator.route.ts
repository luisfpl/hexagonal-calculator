import { Router } from 'express';
import { CalculatorController } from '../controllers/calculator.controller';

const router = Router();
const calculatorController = new CalculatorController();

router.post('/calculate', calculatorController.calculate.bind(calculatorController));

export default router;
