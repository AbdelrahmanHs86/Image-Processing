import { Request, Response, NextFunction } from 'express';
import resize from '../modules/imgResizer';
import isExist from '../modules/isExist';

const imgResize = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const Filename = req.query.filename as string;
		const imgWidth = parseInt(req.query.width as string, 10);
		const imgHeight = parseInt(req.query.height as string, 10);
		// use resize on given queries
		const imgOutput = resize(Filename, imgWidth, imgHeight);
		//check file existance for caching
		const exist = await isExist(imgOutput);
		if (!exist) {
			setTimeout(() => {
				res.sendFile(imgOutput);
			}, 1000);
		} else {
			res.sendFile(imgOutput);
		}
	} catch (err) {
		res.send('Something went Wrong! Check your inputs');
	}

	next();
};

export default imgResize;
