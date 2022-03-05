import {validationResult} from 'express-validator';
import {RequestValidationError} from "../errors/RequestValidationError";

export function validateRequest(req: any, res: any, next: any) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array());
    }
    next();
}
