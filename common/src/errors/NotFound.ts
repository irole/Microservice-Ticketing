import {ClientError} from "./ClientError";

export class NotFound extends ClientError {

    constructor(message: string, statusCode: number = 404) {
        super(message);
        this.msg = [{msg: 'Not Found'}];
        this.statusCode = statusCode;
    }
}
