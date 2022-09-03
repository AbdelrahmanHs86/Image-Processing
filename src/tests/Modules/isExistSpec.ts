/* eslint-disable no-undef */

import isExist from '../../modules/isExist';
const existedImg = '../../Images/Resized/img1_40_40.jpg';
const notexistedImg = '../../Images/Resized/img1_250_600.jpg';

describe('Test Resized File Existance ', () => {
	it('should return true when file exists', () => {
		expect(isExist(existedImg)).toBeTrue;
	});

	it('should return false when file does not exist', () => {
		expect(isExist(notexistedImg)).toBeTrue;
	});
});
