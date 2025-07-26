import { Router } from 'express';
import * as casoController from '../controllers/casosController.js';
import validateCasoOnCreate from '../utils/middlewares/validateCasoOnCreate.js';
import validadeCasoOnUpdate from '../utils/middlewares/validationCasoOnUpdate.js'
import validateCasoOnPatch from '../utils/middlewares/validationCasoOnPatch.js';



const router = Router();

router.get('/', casoController.listCasos);

router.get('/:id', casoController.getCaso);

router.post('/', validateCasoOnCreate, casoController.createCaso);

router.put('/:id', validadeCasoOnUpdate, casoController.updateCaso);

router.patch('/:id', validateCasoOnPatch, casoController.partialUpdateCaso);

router.delete('/:id', casoController.deleteCaso);

export default router;