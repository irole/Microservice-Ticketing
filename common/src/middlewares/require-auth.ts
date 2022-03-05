import {Request, Response, NextFunction} from 'express';
import {ClientError} from "../errors/ClientError";

export const requireAuth = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.currentUser) {
        throw new ClientError('Not authorized', 401);
    }

    next();
};
