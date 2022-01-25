import {Request, Response, NextFunction} from 'express';
import {CustomError} from "../errors/CustomError";
import {RequestValidationError} from "../errors/RequestValidationError";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof CustomError) {
        if (err instanceof RequestValidationError) {

            return res.status(err.statusCode).send(
                {
                    code: err.statusCode, // code : 400
                    errors: err.data // object : {}
                });
        }
        return res.status(err.statusCode).send(
            {
                code: err.statusCode, // code : 500
                errors: err.message // string
            });
    }
    res.status(400).send({
        errors: [{message: 'Something went wrong'}]
    });
};
