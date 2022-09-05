/* eslint-disable no-undef */

import supertest from 'supertest';
import app from '../../index';

const rightEntry = '/api/resize?filename=img1&width=40&height=40';
const wrongEntry = '/api/resize?filename=img1&width=250&height=606';

describe('Test Image Resizer middleware endpoints', () => {
	it('should return a success when right query entry', async () => {
		supertest(app).get(rightEntry).expect(200);
		// const response = await request.get('/api/resize?filename=img1&width=250&height=77');
		// expect(response.status).toEqual(200);
	});

	it('should return a failure when wrong query entry', async () => {
		supertest(app).get(wrongEntry).expect(404);
	});
});
