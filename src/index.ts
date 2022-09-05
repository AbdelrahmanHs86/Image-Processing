import express, { Request, Response } from 'express';
import routes from './routes/index';

const app = express();
const port = 3024;

app.use('/api', routes, (req: Request, res: Response) => {
	res.send(`
	<form action="/api/resize">
	<label for="fname">File name:</label><br>
	<input type="text" id="filename" name="filename" value=""><br>
	<label for="width">Image width:</label><br>
	<input type="number" id="width" name="width" value=""><br>
	<label for="height">Image height:</label><br>
	<input type="number" id="height" name="height" value=""><br>
	<br>
	<input type="submit" value="Resize">
   </form>
`);
});

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Server Working at localhost:${port}`);
});

export default app;
