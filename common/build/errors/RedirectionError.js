"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = require("./CustomError");
class RedirectionError extends CustomError_1.CustomError {
    constructor(message, statusCode = 300) {
        super(message);
        this.msg = [{ msg: message }];
        this.statusCode = statusCode;
    }
}
exports.RedirectionError = RedirectionError;
