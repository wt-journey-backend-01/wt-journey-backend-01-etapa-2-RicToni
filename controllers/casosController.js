import { v4 as uuidv4 } from 'uuid';
import * as casoRepository from '../repositories/casosRepository.js';
import * as agentesRepository from '../repositories/agentesRepository.js';
import { getAgenteById } from '../repositories/agentesRepository.js';
import statusCode from '../utils/statusCode.js';

export function createCaso(req, res) {
  const { agente_id } = req.body;
  
  const agente = agentesRepository.getAgenteById(agente_id);

  if (!agente) {
    return res.status(statusCode.NOT_FOUND).json({ message: 'Agente não encontrado' });
  }

  const novoCaso = { id: uuidv4(), ...req.body };
  const saved =  casoRepository.createCaso(novoCaso);
  return res.status(statusCode.CREATED).json(saved);
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
  res.status(statusCode.OK).json(updatedCaso);
}

export function deleteCaso(req, res) {
  const success = casoRepository.deleteCaso(req.params.id);
  if (!success) return res.status(statusCode.NOT_FOUND).json({ message: 'Caso não encontrado' });
  res.status(statusCode.NO_CONTENT).send();
}

export function getCasosPorAgente(req, res) {
  const { id } = req.query;
  const casos = casoRepository.getCasosByAgenteId(id);
  
  if (!casos || casos.length === 0) {
    return res.status(statusCode.NOT_FOUND).json({ error: 'Nenhum caso encontrado para este agente' });
  }
  res.status(statusCode.OK).json(casos); 
}

export function getAgenteResponsavel(req, res) {
  const { id } = req.params;
  const caso = casoRepository.getCasoById(id);
  if (!caso) return res.status(statusCode.NOT_FOUND).json({ error: 'Caso não encontrado' });

  const agente = getAgenteById(caso.agente_id);
  if (!agente) return res.status(statusCode.NOT_FOUND).json({ error: 'Agente não encontrado' });

  res.status(statusCode.OK).json(agente);
}

export function getCasosPorStatus(req, res) {
  const { status } = req.query;
  const casos = casoRepository.getCasosByStatus(status);
  
  if (!casos || casos.length === 0) {
    return res.status(statusCode.NOT_FOUND).json({ error: 'Nenhum caso encontrado com esse status' });
  }

  res.status(statusCode.OK).json(casos);
}

export function searchCasosPorTexto(req, res) {
  const { q } = req.query;
  const resultados = casoRepository.searchCasos(q);

  if (!resultados || resultados.length === 0) {
    return res.status(statusCode.NOT_FOUND).json({ error: 'Nenhum caso corresponde à pesquisa' });
  }
  
  res.status(statusCode.OK).json(resultados);
}