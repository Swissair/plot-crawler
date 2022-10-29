import { Router } from 'express';
import CrawlerController from '../../controllers/CrawlerController';

const crawlerRouter: Router = Router();

crawlerRouter.route('/').get(CrawlerController.getPlots);

export default crawlerRouter;
