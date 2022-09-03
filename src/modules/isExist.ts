import { promises as fsPromises } from 'fs';

const isExist = async (path: string) => {
	try {
		await fsPromises.access(path);
		return true;
	} catch {
		return false;
	}
};

export default isExist;
