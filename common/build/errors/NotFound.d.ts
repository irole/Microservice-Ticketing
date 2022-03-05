import { ClientError } from "./ClientError";
export declare class NotFound extends ClientError {
    constructor(message: string, statusCode?: number);
}
