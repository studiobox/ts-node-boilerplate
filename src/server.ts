import https from 'https';
import fs from 'fs';

import { App } from './app/App';

require('dotenv').config()

const PORT = process.env.PORT || 9001;

https.createServer({
    key: fs.readFileSync('./certs/cert.key'),
    cert: fs.readFileSync('./certs/cert.crt'),
}, App).listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})