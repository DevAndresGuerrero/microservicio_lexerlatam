import express from 'express';
import empleadoController from '../controllers/empleadoController.js';

const router = express.Router();

router.get('/', empleadoController.getAll);
router.get('/:codigo', empleadoController.getOne);
router.post('/', empleadoController.create);
router.put('/:codigo', empleadoController.update);
router.delete('/:codigo', empleadoController.destroy);

export default router;