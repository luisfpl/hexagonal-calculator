import express from 'express';
import calculatorRoutes from './routes/calculator.route';

const app = express();

app.use(express.json());
app.use('/api', calculatorRoutes);

export default app;
