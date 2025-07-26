import { body } from 'express-validator';

const casoCreateSchema = [
  body('titulo')
    .isString().withMessage('O título deve ser uma string.')
    .notEmpty().withMessage('O título é obrigatório.'),

  body('descricao')
    .isString().withMessage('A descrição deve ser uma string.')
    .notEmpty().withMessage('A descrição é obrigatória.'),

  body('status')
    .isString().withMessage('O status deve ser uma string.')
    .notEmpty().withMessage('O status é obrigatório.')
    .isIn(['aberto', 'fechado']).withMessage('O status deve ser "aberto" ou "fechado".'),

  body('agente_id')
    .isUUID().withMessage('O agente_id deve ser um UUID válido.')
    .notEmpty().withMessage('O agente_id é obrigatório.')
];

export default casoCreateSchema;