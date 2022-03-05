import { CustomError } from "./CustomError";
export declare class ServerError extends CustomError {
    constructor(message: string, statusCode?: number);
}
