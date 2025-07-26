import { Router } from 'express';
import * as casoController from '../controllers/casosController.js';
import validateCasoOnCreate from '../utils/middlewares/validateCasoOnCreate.js';
import validateCasoOnUpdate from '../utils/middlewares/validateCasoOnUpdate.js'
import validateCasoOnPatch from '../utils/middlewares/validateCasoOnPatch.js';



const router = Router();

router.get('/', (req, res) => {
    const { agente_id, status, q } = req.query;
  
    if (agente_id) return casoController.getCasosPorAgente(req, res);
    if (status) return casoController.getCasosPorStatus(req, res);
    if (q) return casoController.searchCasos(req, res);
  
    return casoController.listCasos(req, res);
  });
router.get('/:id/agente', casoController.getAgenteResponsavel);
router.get('/:id', casoController.getCaso);
router.post('/', validateCasoOnCreate, casoController.createCaso);
router.put('/:id', validateCasoOnUpdate, casoController.updateCaso);
router.patch('/:id', validateCasoOnPatch, casoController.partialUpdateCaso);
router.delete('/:id', casoController.deleteCaso);

export default router;