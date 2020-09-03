import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send('hello world');
});
app.listen(7001, () => {
  console.log('server is running');
});
