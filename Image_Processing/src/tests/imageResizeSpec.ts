import imageResize from '../routes/api/imageRezsize';
const fs = require('fs');
import path from 'path';
const workDirectory=path.resolve(__dirname,'../..');
const processed_imagesDir=workDirectory+'/processed_images';

describe('/api endpoint test', () => {
it('expect the processed file with name=fjord,height=100 and width=100', async () => {
    await imageResize(workDirectory+'/'+'images'+'/'+'fjord.jpg', 100, 100, processed_imagesDir + '/' + 100 + 100 + 'fjord.jpg');
    expect(fs.existsSync(processed_imagesDir+'/'+'/'+100+100+'fjord.jpg')).toEqual(true);
  });
  
});
