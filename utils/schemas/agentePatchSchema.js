import { body } from 'express-validator';

const agentePatchSchema = [
  body('id')
    .optional()
    .isUUID().withMessage('O ID deve ser um UUID válido.'),

  body('nome')
    .optional()
    .isString().withMessage('O nome deve ser uma string.'),

  body('dataDeIncorporacao')
    .optional()
    .isISO8601({ strict: true }).withMessage("A dataDeIncorporacao deve estar no formato 'YYYY-MM-DD'."),

  body('cargo')
    .optional()
    .isString().withMessage('O cargo deve ser uma string.')
];

export default agentePatchSchema;