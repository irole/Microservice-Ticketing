import { CustomError } from "./CustomError";
export declare class ClientError extends CustomError {
    constructor(message: string, statusCode?: number);
}
