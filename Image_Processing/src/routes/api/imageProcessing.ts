import path from 'path';
import express, {Request, Response} from 'express';
import imageResize from './imageRezsize';
const fs = require('fs')
const imageProcessing=express.Router();
const sharp = require('sharp');
const bodyParser = require('body-parser');
const app=express();
//const imgtemp=require('./processingImage')


imageProcessing.get('/',async (req:Request,res:Response):Promise<void>=>{
const img :string= String(req.query.img);
const height: number = Number(req.query.height);
const width: number = Number(req.query.width);
const workDirectory=path.resolve(__dirname,'../../..');
const imagesDir=workDirectory+'/images';
const imageName=imagesDir+'/'+img;
if(!fs.existsSync(imageName)){
    res.send('<h1>Image not found</h1>');
  }
const processed_imagesDir=workDirectory+'/processed_images';
try {
    if (!fs.existsSync(processed_imagesDir+'/'+height+width+img)) {
        await imageResize(imagesDir+'/'+img,height, width,processed_imagesDir+'/'+height+width+img);
        console.log("successful");
    }
  } catch(err) {
    console.error(err);
    
  }
    res.sendFile(processed_imagesDir+'/'+height+width+img);
});
export default imageProcessing;