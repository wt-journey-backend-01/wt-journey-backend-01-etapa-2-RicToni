import * as agenteRepository from '../repositories/agentesRepository.js';
import statusCode from '../utils/statusCode.js'


export function createAgente(req, res){
    const { nome, dataDeIncorporacao, cargo } = req.body;
    const agente = agenteRepository.createAgente({ nome, dataDeIncorporacao, cargo });
    res.status(statusCode.CREATED).json(agente);    
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