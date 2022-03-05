"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = require("./CustomError");
class RequestValidationError extends CustomError_1.CustomError {
    constructor(data, statusCode = 400) {
        super();
        this.msg = data.map((err) => {
            return { msg: err.msg, field: err.param };
        });
        this.statusCode = statusCode;
    }
}
exports.RequestValidationError = RequestValidationError;
