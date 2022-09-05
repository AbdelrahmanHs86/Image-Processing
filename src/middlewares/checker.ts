import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';
import isExist from '../modules/isExist';
import path from 'path';

const query_check = [
	check('filename')
		.exists()
		.withMessage('Filename is not included')
		.isAlphanumeric()
		.withMessage('filename should be alpanumeric')
		.isLength({ min: 1, max: 50 })
		.withMessage('firstName should not be empty, should be more than one and less than 50 character')
		.trim(),

	check('width')
		.exists()
		.withMessage('Width is not included')
		.isInt({ gt: 0 })
		.withMessage('Width must be number and greater than 0')
		.isLength({ min: 1, max: 50 })
		.withMessage('width should not be empty, should be more than one and less than 50 character')
		.trim(),

	check('height')
		.exists()
		.withMessage('Height is not included')
		.isInt({ gt: 0 })
		.withMessage('Height must be number and greater than 0')
		.isLength({ min: 1, max: 50 })
		.withMessage('Height should not be empty, should be more than one and less than 50 character')
		.trim(),

	async function (
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<Response<any, Record<string, any>> | undefined> {
		const imgInput = path.join(__dirname, `../../Images/Original/${req.query.filename}.jpg`);
		const exist = await isExist(imgInput);
		var errorValidation = validationResult(req);

		if (!errorValidation.isEmpty() && exist === false) {
			return res.status(500).json({
				'Filename Error': 'Check your image filename',
				Error: errorValidation.array().map((err) => {
					return err.msg;
				}),
			});
		} else if (!errorValidation.isEmpty() && exist === true) {
			return res.status(500).json({
				Error: errorValidation.array().map((err) => {
					return err.msg;
				}),
			});
		} else if (errorValidation.isEmpty() && exist === false) {
			return res.status(500).json({
				'Filename Error': 'Check your image filename',
			});
		}

		next();
	},
];

export default query_check;
