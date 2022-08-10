const express = require('express');
const usersRouter = require('./routes/user.routes');
const authRouter = require('./routes/auth.routes');
// const authController = require('./controllers/auth.controller');
const errorHandler = require('./middlewares/error.middleware');

// ...

const app = express();
app.use(express.json());

// ...
app.use('/users', usersRouter);
app.use('/login', authRouter);
// app.use(authController.validateToken);
app.use(errorHandler);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
