import { body } from 'express-validator';

const casoUpdateSchema = [
  body('titulo')
    .exists().withMessage('O título é obrigatório.')
    .isString().withMessage('O título deve ser uma string.')
    .notEmpty().withMessage('O título não pode ser vazio.'),

  body('descricao')
    .exists().withMessage('A descrição é obrigatória.')
    .isString().withMessage('A descrição deve ser uma string.')
    .notEmpty().withMessage('A descrição não pode ser vazia.'),

  body('status')
    .exists().withMessage('O status é obrigatório.')
    .isString().withMessage('O status deve ser uma string.')
    .isIn(['aberto', 'fechado', 'em andamento']).withMessage('Status inválido.'),
  
  body('agente_id')
    .exists().withMessage('O agente_id é obrigatório.')
    .isUUID().withMessage('O agente_id deve ser um UUID válido.')
];

export default casoUpdateSchema;