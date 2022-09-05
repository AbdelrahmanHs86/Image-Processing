import express from 'express';
import imgResize from '../../middlewares/resizeMiddleware';

const resize = express.Router();

resize.use('/', imgResize);

export default resize;
