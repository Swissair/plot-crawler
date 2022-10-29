import { Router } from 'express';
import mainRouter from './main';
import usersRouter from './users';
import rolesRouter from './roles';
import crawlerRouter from './crawler';

const router: Router = Router();
router.use('/', mainRouter);
router.use('/users', usersRouter);
router.use('/crawler', crawlerRouter);
router.use('/roles', rolesRouter);

export default router;
