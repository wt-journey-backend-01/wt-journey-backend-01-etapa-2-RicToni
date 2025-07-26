import { validationResult } from 'express-validator';
import agentePatchSchema from '../schemas/agentePatchSchema.js';

const validateAgenteOnPatch = [
  ...agentePatchSchema,
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

export default validateAgenteOnPatch;