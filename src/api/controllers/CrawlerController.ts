import { NextFunction, Request, Response } from 'express';

class CrawlerController {
    async getPlots(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            //const roles = await RoleService.getRoles();
            res.status(200).send({
                message: 'Plots fetched successfully',
                data: ['rower', 'masło', 'chleb']
            });
        } catch (error) {
            next(error);
        }
    }
}

export default new CrawlerController();
