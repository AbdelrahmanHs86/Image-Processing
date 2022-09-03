import express from 'express';
import resize from './api/resize';

const routes = express.Router();

routes.use('/resize', resize, (req, res) => {
	// res.send('Provide image details');
});

export default routes;
