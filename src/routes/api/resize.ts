import express from 'express';
import imgResize from '../../middlewares/imgResize';

const resize = express.Router();

resize.use('/', imgResize);

export default resize;
