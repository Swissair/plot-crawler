import * as dotenv from 'dotenv';
dotenv.config();

import { Server } from 'net';
import { createServer } from './server';
import Logger from './utils/logger';
import AppConfig from './config/appConfig';

const PORT = AppConfig.app.port;

function startServer(): Server {
    const app = createServer();

    return app.listen(PORT, async () => {
        Logger.debug(`Server is listening on port ${PORT}`);
    });
}

startServer();
