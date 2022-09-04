import { Request, Response, NextFunction } from 'express';
import sharp from 'sharp';
import path from 'path';
import isExist from '../modules/isExist';

const imgResize = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const Filename = req.query.filename as string;
		const imgWidth = parseInt(req.query.width as string, 10);
		const imgHeight = parseInt(req.query.height as string, 10);
		const imgInput = path.join(__dirname, `../../Images/Original/${Filename}.jpg`);
		const imgOutput = path.join(__dirname, `../../Images/Resized/${Filename}_${imgWidth}_${imgHeight}.jpg`);
		const exist = await isExist(imgOutput);
		if (!exist) {
			if (!Number.isNaN(imgWidth)) {
				sharp(imgInput)
					.resize(imgWidth, imgHeight)
					.jpeg({ mozjpeg: true })
					.toFile(imgOutput)
					// eslint-disable-next-line no-console
					.catch((err) => console.log('error: ', err));
				setTimeout(() => {
					res.sendFile(imgOutput);
				}, 1000);
			}
		} else {
			res.sendFile(imgOutput);
		}
	} catch (err) {
		res.send('Something went Wrong! Check your inputs');
	}

	next();
};

export default imgResize;
