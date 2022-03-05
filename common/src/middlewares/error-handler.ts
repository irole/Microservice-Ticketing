import {CustomError} from "../errors/CustomError";

export const errorHandler = (
    err: any,
    req: any,
    res: any,
    next: any
) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send(
            {
                code: err.statusCode,
                errors: err.msg // array
            });
    }
    res.status(400).send({
        errors: [{message: 'Something went wrong'}]
    });
};
