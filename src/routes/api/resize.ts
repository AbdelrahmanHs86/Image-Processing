import express from 'express';
import imgResize from '../../imgResize';

const resize = express.Router();

resize.use('/', imgResize);

export default resize;
