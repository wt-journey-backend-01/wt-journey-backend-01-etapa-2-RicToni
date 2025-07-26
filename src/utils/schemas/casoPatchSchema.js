import { body } from 'express-validator';

const casoPatchSchema = [
  body('titulo')
    .optional()
    .isString().withMessage('O título deve ser uma string.')
    .notEmpty().withMessage('O título não pode ser vazio.'),

  body('descricao')
    .optional()
    .isString().withMessage('A descrição deve ser uma string.')
    .notEmpty().withMessage('A descrição não pode ser vazia.'),

  body('status')
    .optional()
    .isString().withMessage('O status deve ser uma string.')
    .isIn(['aberto', 'fechado', 'em andamento']).withMessage('Status inválido.'),
  
  body('agente_id')
    .optional()
    .isUUID().withMessage('O agente_id deve ser um UUID válido.')
];

export default casoPatchSchema;