import { body } from 'express-validator';

const agenteCreateSchema = [
  body('id')
    .isUUID().withMessage('O ID deve ser um UUID válido.')
    .notEmpty().withMessage('O ID é obrigatório.'),

  body('nome')
    .isString().withMessage('O nome deve ser uma string.')
    .notEmpty().withMessage('O nome é obrigatório.'),

  body('dataDeIncorporacao')
    .isISO8601({ strict: true }).withMessage("A dataDeIncorporacao deve estar no formato 'YYYY-MM-DD'.")
    .notEmpty().withMessage('A dataDeIncorporacao é obrigatória.'),

  body('cargo')
    .isString().withMessage('O cargo deve ser uma string.')
    .notEmpty().withMessage('O cargo é obrigatório.')
];

export default agenteCreateSchema;