import {Request, Response, NextFunction} from 'express';
import {RequestValidationError} from '../errors/RequestValidationError'
import {validationResult} from 'express-validator';

const ConflictError = require('../errors/ConflictError');

let messages: object = {};

function validateRequest(req: Request, res: Response, next: NextFunction) {
    messages = {};
    const result = validationResult(req).array();
    if (result.length > 0) { // Error
        result.forEach((item: any) => {
            // @ts-ignore
            messages[item.param] = item.msg;
        });
        throw new RequestValidationError(messages);
    }
    next();
}

export = validateRequest;
