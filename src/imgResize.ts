import { Request, Response, NextFunction } from 'express';
import sharp from 'sharp';
import path from 'path';
import { JSDOM } from 'jsdom';
import isExist from './isExist';

const imgResize = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const Filename = req.query.filename as string;
		const imgWidth = parseInt(req.query.width as string, 10);
		const imgHeight = parseInt(req.query.height as string, 10);
		const imgInput = path.join(__dirname, `./Images/Original/${Filename}.jpg`);
		const imgOutput = path.join(__dirname, `./Images/Resized/img1_${imgWidth}_${imgHeight}.jpg`);

		const exist = await isExist(imgOutput);
		if (!exist) {
			if (!Number.isNaN(imgWidth)) {
				sharp(imgInput)
					.resize(imgWidth, imgHeight)
					.jpeg({ mozjpeg: true })
					.toFile(imgOutput)
					.catch((err) => console.log('error: ', err));
				// res.attachment(imgOutput);
				res.set('Content-Type', 'text/html');
				res.send(Buffer.from(`<p>some html <img src='${imgOutput}' ></p>`));
				// res.send('<p>Done, Check Your resized Image</p>');
			}
		} else {
			// res.attachment(imgOutput);
			res.send(`<p>Image Already has been resized <img src='${imgOutput}' ></p>`);
		}
	} catch (err) {
		res.send('Something went Wrong! Check your inputs');
		console.log('error: ', err);
	}

	next();
};

export default imgResize;
