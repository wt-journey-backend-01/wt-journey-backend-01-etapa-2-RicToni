import { validationResult } from 'express-validator';
import casoCreateSchema from '../schemas/casoCreateSchema.js';

const validateCasoOnCreate = [
  ...casoCreateSchema,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const formattedErrors = {};
      errors.array().forEach(err => {
        formattedErrors[err.param] = err.msg;
      });
      return res.status(400).json({
        status: 400,
        message: 'Parâmetros inválidos',
        errors: formattedErrors,
      });
    }
    next();
  }
];

export default validateCasoOnCreate;