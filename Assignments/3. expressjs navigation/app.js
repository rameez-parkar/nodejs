const path = require('path');
const express = require('express');

const landingRoutes = require('./routes/landing-page');
const usersRoutes = require('./routes/users');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', usersRoutes);
app.use(landingRoutes);
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);