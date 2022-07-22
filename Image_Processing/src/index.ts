import express from 'express';
import routes from './routes/index';
const logger = require('morgan');
const app = express();
app.use(logger('dev'));
const port = 3000;
app.use('/api', routes);
app.listen(port, () => {
  logger(console.debug(`server started at localhost:${port}`));
});
module.exports = app;
