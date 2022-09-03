import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3024;

app.use('/api', routes, (req, res) => {
	res.send('Image Rezizer API');
});

app.listen(port, () => {
	console.log(`Server Working at localhost:${port}`);
});
