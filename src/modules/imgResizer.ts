import sharp from 'sharp';
import path from 'path';

const imgResize = (Filename: string, imgWidth: number, imgHeight: number): string => {
	const imgInput = path.join(__dirname, `../../Images/Original/${Filename}.jpg`);
	const imgOutput = path.join(__dirname, `../../Images/Resized/${Filename}_${imgWidth}_${imgHeight}.jpg`);

	if (!Number.isNaN(imgWidth)) {
		sharp(imgInput)
			.resize(imgWidth, imgHeight)
			.jpeg({ mozjpeg: true })
			.toFile(imgOutput)
			// eslint-disable-next-line no-console
			.catch((err) => console.log('error: ', err));
	}

	return imgOutput;
};

export default imgResize;
