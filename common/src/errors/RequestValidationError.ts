import {CustomError} from "./CustomError";

export class RequestValidationError extends CustomError {

    constructor(data: any, statusCode: number = 400) {
        super();
        this.msg = data.map((err: any) => {
            return {msg: err.msg, field: err.param};
        });
        this.statusCode = statusCode;
    }
}
