import path from 'path';
import express, { Request, Response } from 'express';
import imageResize from './imageRezsize';
const fs = require('fs');
const imageProcessing = express.Router();
imageProcessing.get('/', async (req: Request, res: Response): Promise<void> => {
  const img: string = String(req.query.img);
  const height: number = Number(req.query.height);
  const width: number = Number(req.query.width);
  const workDirectory = path.resolve(__dirname, '../../..');
  const imagesDir = workDirectory + '/images';
  const imageName = imagesDir + '/' + img;
  const processedImagesDir = workDirectory + '/processed_images';
  if (!fs.existsSync(imageName)) {
    res.send('<h1>Image not found,Please check the Image name</h1>');
    return;
  }
  if (
    height <= 0 ||
    Number.isNaN(height) ||
    width <= 0 ||
    Number.isNaN(width) ||
    !img
  ) {
    res
      .status(400)
      .send('<h1>Input parameter is not correct,Please check..!</h1>');
    return;
  }
  try {
    if (!fs.existsSync(processedImagesDir + '/' + height + width + img)) {
      await imageResize(
        imagesDir + '/' + img,
        height,
        width,
        processedImagesDir + '/' + height + width + img
      );
      console.log('successful');
    }
  } catch (err) {
    console.error(err);
    res.send('<h1>Error during Image processing..</h1>');
  }
  res.sendFile(processedImagesDir + '/' + height + width + img);
});
export default imageProcessing;
