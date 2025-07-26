import * as agenteRepository from '../repositories/agentesRepository.js';
import statusCode from '../utils/statusCode.js'
import { v4 as uuidv4 } from 'uuid';


export function createAgente(req, res){
    const { nome, dataDeIncorporacao, cargo } = req.body;

    const novoAgente = {
        id: uuidv4(),
        nome,
        dataDeIncorporacao,
        cargo
      };

      agenteRepository.createAgente(novoAgente);
      return res.status(statusCode.CREATED).json(novoAgente);
}

export function listAgentes(req, res) {
    const agentes = agenteRepository.getAgentes();
    res.status(statusCode.OK).json(agentes);
}

export function getAgente(req, res) {
    const { id } = req.params;
    const agente = agenteRepository.getAgenteById(id);

    if (!agente)return res.status(statusCode.NOT_FOUND).json({ error: 'Agente não encontrado.'})
    
    res.status(statusCode.OK).json(agente)
}

export function updateAgente(req, res) {
    const { id } = req.params;
    const dadosAtualizacao = req.body; 
    
    const agente = agenteRepository.updateAgente(id, dadosAtualizacao);
    
    if (!agente) return res.status(statusCode.NOT_FOUND).json({ error: 'Agente não encontrado' });
    res.status(statusCode.OK).json(agente);
}

export function deleteAgente(req, res) {
    const { id } = req.params;
    const success = agenteRepository.deleteAgente(id);
    if (!success) return res.status(statusCode.NOT_FOUND).json({ error: 'Agente não encontrado' });
    res.status(statusCode.NO_CONTENT).send();
  }

export function getAgentesPorCargo(req, res) {
  const { cargo } = req.query;
  if (!cargo) {
    return res.status(statusCode.BAD_REQUEST).json({ error: 'Parâmetro "cargo" é obrigatório.' });
  }

  const agentes = agenteRepository.getAgentesByCargo(cargo);

  if (!agentes || agentes.length === 0) {
    return res.status(statusCode.NOT_FOUND).json({ error: 'Nenhum agente encontrado com esse cargo.' });
  }

  res.status(statusCode.OK).json(agentes);
}

export function getAgentesOrdenados(req, res) {
    const { sort } = req.query;
  
    if (!sort || sort !== 'dataDeIncorporacao' && sort !== '-dataDeIncorporacao') {
      return res.status(statusCode.BAD_REQUEST).json({ error: 'Parâmetro "sort" inválido ou ausente.' });
    }
  
    const agentes = agenteRepository.getAgentesOrdenadosPorData(sort);
  
    if (!agentes || agentes.length === 0) {
      return res.status(statusCode.NOT_FOUND).json({ error: 'Nenhum agente encontrado para ordenação.' });
    }
  
    res.status(statusCode.OK).json(agentes);
  }