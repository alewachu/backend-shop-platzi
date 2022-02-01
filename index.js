const express = require('express');
const routerApi = require('./routes');
const { checkApiKey } = require('./middlewares/auth.handler');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
require('./utils/auth')






app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});
app.get('/nueva-ruta', checkApiKey, (req, res) => {
  res.send('Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});

