import { Router } from 'express';
import * as agenteController from '../controllers/agenteController.js';
import validateAgenteOnCreate from '../utils/middlewares/validateAgenteOnCreate.js';
import validateAgenteOnUpdate from '../utils/middlewares/validateAgenteOnUpdate.js';
import validateAgenteOnPatch from '../utils/middlewares/validateAgenteOnPatch.js';

const router = Router();


router.post('/', validateAgenteOnCreate, agenteController.createAgente);
router.get('/', agenteController.listAgentes);
router.get('/:id', agenteController.getAgente);
router.put('/:id', validateAgenteOnUpdate, agenteController.updateAgente);
router.patch('/:id', validateAgenteOnPatch, agenteController.partialUpdateAgente); // PATCH
router.delete('/:id', agenteController.deleteAgente);

export default router;