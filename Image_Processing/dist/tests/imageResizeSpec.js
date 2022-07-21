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
const path_1 = __importDefault(require("path"));
const fs = require('fs');
const workDirectory = path_1.default.resolve(__dirname, '../..');
const processedImagesDir = workDirectory + '/processed_images';
const app = require('../index'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);
describe('/api endpoint test', () => {
    let server;
    it('expect the processed file with name=fjord,height=100 and width=100', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, imageRezsize_1.default)(workDirectory + '/' + 'images' + '/' + 'fjord.jpg', 100, 100, processedImagesDir + '/' + 100 + 100 + 'fjord.jpg');
        expect(fs.existsSync(processedImagesDir + '/' + '/' + 100 + 100 + 'fjord.jpg')).toEqual(true);
    }));
    it('gets the test endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/imageProcessing?img=fjord&height=100&width=100');
        expect(response.status).toBe(200);
        //expect(response.body.message).toBe('pass!')
    }), 1500);
});
