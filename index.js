const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler,boomErrorHandler } = require('./middlewares/error.handler');


const app = express();
const port = process.env.PORT || 3007;

app.use(express.json());

const whitelist = ['http://localhost:5500'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }

  }
}

app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hello World!, my first server at express');

});

app.get('/new-route', (req, res) => {
  res.send('Hello World!,I am a new route');
});


routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);



app.listen(port, () => {
  console.log('Server is running at port 3007');
});
