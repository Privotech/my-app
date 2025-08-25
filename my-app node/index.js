const express = require('express');
const app = express();
const port = 3010;




app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/sih', (req, res) => {
    res.sendFile(__dirname + '/Views/dashboard.ejs');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});