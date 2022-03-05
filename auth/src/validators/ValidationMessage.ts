import {validationResult} from 'express-validator';

import autoBind from "auto-bind";

class ValidationMessage {

    messages: any = {}

    constructor() {
        autoBind(this);
    }

    async apiHandle(req: any) {
        const result = validationResult(req).array();
        if (result.length > 0) { // Error
            result.forEach((item: any) => {
                this.messages[item.param] = item.msg;
            });
            return this.messages;
        }
        return false;
    }
}

export default ValidationMessage;
