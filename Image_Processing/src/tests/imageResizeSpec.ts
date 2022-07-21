import imageResize from '../routes/api/imageRezsize'
import path from 'path'
const fs = require('fs')
const workDirectory = path.resolve(__dirname, '../..')
const processedImagesDir = workDirectory + '/processed_images'
const app = require('../index') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

describe('/api endpoint test', () => {
  it('expect the processed file with name=fjord,height=100 and width=100', async () => {
    await imageResize(workDirectory + '/' + 'images' + '/' + 'fjord.jpg', 100, 100, processedImagesDir + '/' + 100 + 100 + 'fjord.jpg')
    expect(fs.existsSync(processedImagesDir + '/' + '/' + 100 + 100 + 'fjord.jpg')).toEqual(true)
  })
  it('gets the test endpoint', async () => {
    const response = await request.get('/api/imageProcessing?img=fjord&height=100&width=100')
    expect(response.status).toBe(200)
  }, 1500)
})
