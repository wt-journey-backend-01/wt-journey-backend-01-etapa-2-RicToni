import { Router } from 'express';
import * as agenteController from '../controllers/agentesController.js';
import validateAgenteOnCreate from '../utils/middlewares/validateAgenteOnCreate.js';
import validateAgenteOnUpdate from '../utils/middlewares/validateAgenteOnUpdate.js';
import validateAgenteOnPatch from '../utils/middlewares/validateAgenteOnPatch.js';

const router = Router();


router.post('/', validateAgenteOnCreate, agenteController.createAgente);
router.get('/', (req, res) => {
    const { cargo, sort } = req.query;
  
    if (cargo) return agenteController.getAgentesPorCargo(req, res);
    if (sort === 'dataDeIncorporacao') return agenteController.getAgentesOrdenados(req, res);
  
    return agenteController.listAgentes(req, res);
  });
router.get('/:id', agenteController.getAgente);
router.put('/:id', validateAgenteOnUpdate, agenteController.updateAgente);
router.patch('/:id', validateAgenteOnPatch, agenteController.updateAgente); 
router.delete('/:id', agenteController.deleteAgente);

export default router;