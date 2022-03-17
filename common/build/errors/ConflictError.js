"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictError = void 0;
const CustomError_1 = require("./CustomError");
class ConflictError extends CustomError_1.CustomError {
    constructor(message, statusCode = 409) {
        super(message);
        this.msg = [{ msg: message }];
        this.statusCode = statusCode;
    }
}
exports.ConflictError = ConflictError;
