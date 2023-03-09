require('dotenv').config();

const express = require('express');
const cors = require('cors');
const logger = require('./app/helpers/logger');
const router = require('./app/routers/index');


const port = process.env.PORT || 3000;

const app = express();

app.use(cors({
  origin:'*'
}));

app.use(express.json());

app.use(router);

app.listen(port, () => {
  logger.log(`Server ready: http://localhost:${port}`);
});
