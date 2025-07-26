import { v4 as uuidv4 } from 'uuid';
import * as casoRepository from '../repositories/casosRepository.js';
import statusCode from '../utils/statusCode.js';

export function createCaso(req, res) {
  const novoCaso = { id: uuidv4(), ...req.body };
  const saved = casoRepository.createCaso(novoCaso);
  res.status(statusCode.CREATED).json(saved);
}

export function listCasos(req, res) {
  const casos = casoRepository.getAllCasos();
  res.status(statusCode.OK).json(casos);
}

export function getCaso(req, res) {
  const caso = casoRepository.getCasoById(req.params.id);
  if (!caso) return res.status(statusCode.NOT_FOUND).json({ message: 'Caso não encontrado' });
  res.status(statusCode.OK).json(caso);
}

export function updateCaso(req, res) {
  const updatedCaso = casoRepository.updateCaso(req.params.id, req.body);
  if (!updatedCaso) return res.status(statusCode.NOT_FOUND).json({ message: 'Caso não encontrado' });
  res.status(statusCode.OK).json(updatedCaso);
}

export function partialUpdateCaso(req, res) {
  const updatedCaso = casoRepository.updateCaso(req.params.id, req.body);
  if (!updatedCaso) return res.status(statusCode.NOT_FOUND).json({ message: 'Caso não encontrado' });
  res.json(updatedCaso);
}

export function deleteCaso(req, res) {
  const success = casoRepository.deleteCaso(req.params.id);
  if (!success) return res.status(statusCode.NOT_FOUND).json({ message: 'Caso não encontrado' });
  res.status(statusCode.NO_CONTENT).send();
}