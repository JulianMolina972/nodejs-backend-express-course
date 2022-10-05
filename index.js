const express = require('express');
const routerApi = require('./routes');


const app = express();
const port = 3007;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!, my first server at express');

});

app.get('/new-route', (req, res) => {
  res.send('Hello World!,I am a new route');
});


routerApi(app);


app.listen(port, () => {
  console.log('Server is running at port 3007');
});
