import autoBind from "auto-bind";

interface CustomErrorInterface {
    statusCode: number;
    data: any;
}

export abstract class CustomError extends Error implements CustomErrorInterface {
    statusCode!: number;
    data!: any;

    protected constructor(message: string = '') {
        super(message);
        autoBind(this);
    }

}
