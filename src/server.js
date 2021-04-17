const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

app.use(express.json());

require('./routes')(app);
require('./controllers/projectController')(app);

app.listen(3333);
