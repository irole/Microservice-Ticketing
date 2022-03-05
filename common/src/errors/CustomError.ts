interface CustomErrorInterface {
    statusCode: number;
    msg: any;
}

export abstract class CustomError extends Error implements CustomErrorInterface {
    statusCode!: number;
    msg!: any;

    protected constructor(message: string = '') {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }

}
