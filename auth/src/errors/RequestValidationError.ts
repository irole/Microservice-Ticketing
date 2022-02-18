import {CustomError} from "./CustomError";

export class RequestValidationError extends CustomError {

    constructor(data: any, statusCode: number = 400) {
        super();
        this.data = data;
        this.statusCode = statusCode;
    }
}
