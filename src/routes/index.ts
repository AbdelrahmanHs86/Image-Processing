import express from 'express';
import resize from './api/resize';

const routes = express.Router();

routes.use('/resize', resize, () => {});

export default routes;
