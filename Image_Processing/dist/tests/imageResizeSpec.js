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
const imageRezsize_1 = __importDefault(require("../routes/api/imageRezsize"));
const fs = require('fs');
const path_1 = __importDefault(require("path"));
const workDirectory = path_1.default.resolve(__dirname, '../..');
const processed_imagesDir = workDirectory + '/processed_images';
describe('/api endpoint test', () => {
    it('expect the processed file with name=fjord,height=100 and width=100', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, imageRezsize_1.default)(workDirectory + '/' + 'images' + '/' + 'fjord.jpg', 100, 100, processed_imagesDir + '/' + 100 + 100 + 'fjord.jpg');
        expect(fs.existsSync(processed_imagesDir + '/' + '/' + 100 + 100 + 'fjord.jpg')).toEqual(true);
    }));
});
