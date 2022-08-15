const express = require('express');
const usersRouter = require('./routes/user.routes');
const authRouter = require('./routes/auth.routes');
const categoryRouter = require('./routes/category.routes');

const errorHandler = require('./middlewares/error.middleware');

// ...

const app = express();
app.use(express.json());

// ...
app.use('/user', usersRouter);
app.use('/login', authRouter);
app.use('/category', categoryRouter);
app.use(errorHandler);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
