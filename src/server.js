// Doesn't do anything yet.

import * as express from 'express';

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(3000);
