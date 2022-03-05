import { CustomError } from "./CustomError";
export declare class RedirectionError extends CustomError {
    constructor(message: string, statusCode?: number);
}
