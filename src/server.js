import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/', router);
app.use('/course', router);
app.use('/material', router);


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
