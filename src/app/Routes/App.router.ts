import { Request, Response, Router } from "express";
import { logger } from "../../utils/logger";

export const AppRouter = Router();

AppRouter.get('/', (req: Request, res: Response) => {
    logger.info("Root Route access!");
    res.status(200).send({
        status: "OK",
        message: 'Welcome to our TypeScript Backend App!'
    });
});

AppRouter.get('/status', (req: Request, res: Response) => {
    logger.info("Checking the API status: Everything is OK");
    res.status(200).send({
        status: "UP",
        message: 'The API is up and running!'
    });
});