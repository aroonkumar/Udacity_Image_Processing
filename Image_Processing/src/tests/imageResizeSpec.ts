import imageResize from '../routes/api/imageRezsize';
const fs = require('fs');

describe('/api endpoint test', () => {
it('expect the processed file with name=fjord,height=100 and width=100', async () => {
    await imageResize('./Image_Processing/images/fjord.jpg', 100, 100, './Image_Processing/processed_images' + '/' + 100 + 100 + 'fjord.jpg');
    expect(fs.existsSync('./Image_Processing/processed_images'+'/'+100+100+'fjord.jpg')).toEqual(true);
  });
  
});
