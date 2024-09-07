const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/assignment/:name', (req, res) => {
    res.send(req.params);
});

app.get('/add/:x/:y', (req, res) => {
    res.send((parseInt(req.params.x) + parseInt(req.params.y)).toString());
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));