"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = require("./CustomError");
class ClientError extends CustomError_1.CustomError {
    constructor(message, statusCode = 400) {
        super(message);
        this.msg = [{ msg: message }];
        this.statusCode = statusCode;
    }
}
exports.ClientError = ClientError;
