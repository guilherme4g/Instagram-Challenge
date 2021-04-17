import * as express from 'express';
import * as cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
