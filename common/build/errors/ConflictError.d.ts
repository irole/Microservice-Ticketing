import { CustomError } from "./CustomError";
export declare class ConflictError extends CustomError {
    constructor(message: string, statusCode?: number);
}
