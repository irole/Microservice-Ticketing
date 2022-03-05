"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClientError_1 = require("./ClientError");
class NotFound extends ClientError_1.ClientError {
    constructor(message, statusCode = 404) {
        super(message);
        this.msg = [{ msg: 'Not Found' }];
        this.statusCode = statusCode;
    }
}
exports.NotFound = NotFound;
