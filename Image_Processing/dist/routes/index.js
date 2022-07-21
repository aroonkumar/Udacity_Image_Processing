"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageProcessing_1 = __importDefault(require("./api/imageProcessing"));
const routes = express_1.default.Router();
routes.get('/', (rq, res) => {
    res.send('Main api route');
});
routes.use('/imageProcessing', imageProcessing_1.default);
exports.default = routes;
