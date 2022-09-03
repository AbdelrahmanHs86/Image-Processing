/* eslint-disable no-undef */

import supertest from 'supertest';
import app from '../index';

describe('Test app main endpoint', () => {
	it('should return a status of 200 on /api endpoint', () => {
		supertest(app).get('/api').expect(200);
	});
});
