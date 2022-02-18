import {Request, Response, NextFunction} from 'express';
import {RequestValidationError} from '../errors/RequestValidationError'
import {validationResult} from 'express-validator';


function validateRequest(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array());
    }
    next();
}

export = validateRequest;
