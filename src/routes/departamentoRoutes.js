import express from 'express';
import departamentoController from '../controllers/departamentoController.js';

const router = express.Router();

router.get('/', departamentoController.getAll);
router.get('/:codigo', departamentoController.getOne);
router.post('/', departamentoController.create);
router.put('/:codigo', departamentoController.update);
router.delete('/:codigo', departamentoController.destroy);

export default router;