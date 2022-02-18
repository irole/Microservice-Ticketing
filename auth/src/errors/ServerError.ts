import {CustomError} from "./CustomError";

export class ServerError extends CustomError {

    constructor(message: string, statusCode: number = 500) {
        super(message);
        this.msg = message;
        this.statusCode = statusCode;
    }
}
