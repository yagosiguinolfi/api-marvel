const express = require('express');
const cors = require('cors');

require('./database');

const app = express();

app.use(cors());
app.use(express.json());

require('./routes')(app);
require('./controllers/projectController')(app);

app.listen(8080);
