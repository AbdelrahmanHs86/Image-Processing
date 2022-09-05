import express from 'express';
import resizeMiddleware from '../../middlewares/resizeMiddleware';
import query_check from '../../middlewares/checker';

const resize = express.Router();

resize.use('/', query_check, resizeMiddleware);

export default resize;
