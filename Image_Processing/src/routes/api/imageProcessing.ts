import path from 'path';
import express, {Request, Response} from 'express';
const fs = require('fs')
const imageProcessing=express.Router();
const sharp = require('sharp');
const bodyParser = require('body-parser');
const app=express();



imageProcessing.get('/',async (req,res)=>{
const img :string= String(req.query.img);
const height: number = Number(req.query.height);
const width: number = Number(req.query.width);
const workDirectory=path.resolve(__dirname,'../../..');
console.log(workDirectory);
const imagesDir=workDirectory+'/images';
console.log(imagesDir);
const processed_imagesDir=workDirectory+'/processed_images';
console.log(processed_imagesDir);
try {
    if (!fs.existsSync(processed_imagesDir+'/'+height+width+img)) {
        const resize = await sharp(imagesDir+'/'+img)
        .resize(height, width)
        .toFile(processed_imagesDir+'/'+height+width+img)
      
        console.log(resize)
    }
  } catch(err) {
    console.error(err);
  }


//resizeImage()


    res.sendFile(processed_imagesDir+'/'+height+width+img);
});
export default imageProcessing;