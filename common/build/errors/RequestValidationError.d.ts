import { CustomError } from "./CustomError";
export declare class RequestValidationError extends CustomError {
    constructor(data: any, statusCode?: number);
}
