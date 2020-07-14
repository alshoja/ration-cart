import * as path from 'path';
import * as fs from 'fs';

export const clearImage = filePath => {
    filePath = path.join(__dirname, '..', filePath);
    fs.unlink(filePath, err => console.log(err));
};