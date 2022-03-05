interface CustomErrorInterface {
    statusCode: number;
    msg: any;
}
export declare abstract class CustomError extends Error implements CustomErrorInterface {
    statusCode: number;
    msg: any;
    protected constructor(message?: string);
}
export {};
