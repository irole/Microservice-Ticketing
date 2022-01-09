import autoBind from 'auto-bind';

module.exports = class Controller {
    constructor() {
        autoBind(this);
    }
};
