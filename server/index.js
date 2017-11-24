import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

const app = express();

app.set('port', 3000);

app.use(logger('dev'));
app.use(bodyParser.json());
