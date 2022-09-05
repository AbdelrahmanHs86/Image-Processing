/* eslint-disable no-undef */

import imgResizer from '../../modules/imgResizer';

const imgName = 'img1';

describe('Test image resizing function', () => {
	it('should not throw an error when correct entered queries', () => {
		expect(() => {
			imgResizer(imgName, 50, 50);
		}).not.toThrow();
	});

	// it('should throw an error when wrong entered queries', () => {
	// 	expect(() => {
	// 		imgResizer(notexistedImg, 50, 50);
	// 	}).toThrow();
	// });
});
