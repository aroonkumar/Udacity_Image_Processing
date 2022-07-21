import path from 'path'
import express, { Request, Response } from 'express'
import imageResize from './imageRezsize'
const fs = require('fs')
const imageProcessing = express.Router()
imageProcessing.get('/', async (req: Request, res: Response): Promise<void> => {
  const img: string = String(req.query.img)
  const height: number = Number(req.query.height)
  const width: number = Number(req.query.width)
  const workDirectory = path.resolve(__dirname, '../../..')
  const imagesDir = workDirectory + '/images'
  const imageName = imagesDir + '/' + img
  if (!fs.existsSync(imageName)) {
    res.send('<h1>Image not found</h1>')
  }
  if (height <= 0) {
    res.send('<h1>Height must me greater than zero</h1>')
  }
  if (width <= 0) {
    res.send('<h1>Width must me greater than zero</h1>')
  }
  const processedImagesDir = workDirectory + '/processed_images'
  try {
    if (!fs.existsSync(processedImagesDir + '/' + height + width + img)) {
      await imageResize(imagesDir + '/' + img, height, width, processedImagesDir + '/' + height + width + img)
      console.log('successful')
    }
  } catch (err) {
    console.error(err)
  }
  res.sendFile(processedImagesDir + '/' + height + width + img)
})
export default imageProcessing
