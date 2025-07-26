import { validationResult } from 'express-validator';
import agenteUpdateSchema from '../schemas/agenteUpdateSchema.js';

const validateAgenteOnUpdate = [
  ...agenteUpdateSchema,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 400,
        message: 'Parâmetros inválidos',
        errors: Object.fromEntries(
          errors.array().map(err => [err.path, err.msg])
        )
      });
    }
    next();
  }
];

export default validateAgenteOnUpdate;