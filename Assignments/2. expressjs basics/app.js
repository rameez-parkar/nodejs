const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('In first middleware');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('In second middleware');
//     res.send('<h1>Funneling through two middlware functions...</h1>');
// });

app.use('/users', (req, res, next) => {
    res.send('<h1>Users:</h1><ul><li>John Cena</li><li>Jeff Hardy</li><li>CM Punk</li></ul>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Welcome to Users app!!</h1>');
});

app.listen(3000);