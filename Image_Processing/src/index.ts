import express from 'express';
import routes from './routes/index';
import imageProcessing from './routes/api/imageProcessing';
const logger = require('morgan');
const fs = require('fs')
const stream = require('stream')
const app=express();
app.use(logger('dev'));
const port=3000;
app.use('/api',routes);
app.listen(port,()=>{
    logger(console.debug(`server started at localhost:${port}`));
});