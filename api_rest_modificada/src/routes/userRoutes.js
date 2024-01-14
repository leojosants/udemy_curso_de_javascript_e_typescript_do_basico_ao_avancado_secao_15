import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// nao deveria existir
// router.get('/', userController.index);
// router.get('/:id', userController.show);

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/**
 * Metodos necessarios em um controller
 * index - lista todos os usuarios
 *  verbo:
 *    - GET
 *
 * store - cria um novo usuario
 *  verbo:
 *    - POST
 *
 * delete - apaga um usuario
 *  verbo:
 *    - DELETE
 *
 * show - mostra um usuario
 *  verbo:
 *    - GET
 *
 * update - atualiza um usuario
 *  verbo:
 *    - PATCH ->  altera somente um valor
 *    - PUT   ->  substitui todo o objeto
 */
