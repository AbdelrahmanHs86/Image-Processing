import express from 'express';

const app = express();
const port = 3024;

app.get('/', (req, res) => {
	res.send('Perfect👌🏻');
});

app.listen(port, () => {
	console.log(`Server Working at localhost:${port}`);
});
