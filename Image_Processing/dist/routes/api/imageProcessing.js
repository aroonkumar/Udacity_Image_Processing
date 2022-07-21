"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const imageRezsize_1 = __importDefault(require("./imageRezsize"));
const fs = require('fs');
const imageProcessing = express_1.default.Router();
const sharp = require('sharp');
const bodyParser = require('body-parser');
const app = (0, express_1.default)();
//const imgtemp=require('./processingImage')
imageProcessing.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const img = String(req.query.img);
    const height = Number(req.query.height);
    const width = Number(req.query.width);
    const workDirectory = path_1.default.resolve(__dirname, '../../..');
    const imagesDir = workDirectory + '/images';
    const imageName = imagesDir + '/' + img;
    if (!fs.existsSync(imageName)) {
        res.send('<h1>Image not found</h1>');
    }
    const processed_imagesDir = workDirectory + '/processed_images';
    try {
        if (!fs.existsSync(processed_imagesDir + '/' + height + width + img)) {
            yield (0, imageRezsize_1.default)(imagesDir + '/' + img, height, width, processed_imagesDir + '/' + height + width + img);
            console.log("successful");
        }
    }
    catch (err) {
        console.error(err);
    }
    res.sendFile(processed_imagesDir + '/' + height + width + img);
}));
exports.default = imageProcessing;
