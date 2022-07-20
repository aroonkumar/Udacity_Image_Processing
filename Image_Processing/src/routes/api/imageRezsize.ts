const sharp = require('sharp');
    const imageResize = async(imgdest:string,height:number,width:number,processedImgDir:string):Promise<void> =>{ 
    try{
            const resize = await sharp(imgdest)
            .resize(height, width)
            .toFile(processedImgDir)
            console.log(resize)
    }catch(error){
        console.log(error);

    }
}
export default imageResize;

      
