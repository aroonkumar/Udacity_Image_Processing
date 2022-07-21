"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const logger = require('morgan');
const app = (0, express_1.default)();
app.use(logger('dev'));
const port = 3000;
app.use('/api', index_1.default);
app.listen(port, () => {
    logger(console.debug(`server started at localhost:${port}`));
});
module.exports = app;
