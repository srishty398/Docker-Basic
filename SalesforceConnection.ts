import * as jsforce from 'jsforce';
import * as fs from 'fs';
import * as path from 'path';

const config = 
JSON.parse(fs.readFileSync(path.resolve(__dirname,'config.json'))).toString