import express from 'express';
import routes from './routes/index';
import imageProcessing from './routes/api/imageProcessing';
const fs = require('fs')
const stream = require('stream')
const app=express();
const port=3000;

// app.get('/imageProcessing', function (req, res) {
//     console.log(req.query.img);
//     console.log(req.query.height);
//     console.log(req.query.width);
    
//     res.sendFile('D:/Work/JavaScript_WS/Image_Processing/processed_images/resize_fjord.jpg');
// });

app.use('/api',routes);
app.listen(port,()=>{
    console.log(`server started at localhost:${port}`);
});