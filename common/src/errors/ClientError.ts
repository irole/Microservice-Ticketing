import {CustomError} from "./CustomError";

export class ClientError extends CustomError {

    constructor(message: string, statusCode: number = 400) {
        super(message);
        this.msg = [{msg: message}];
        this.statusCode = statusCode;
    }
}
