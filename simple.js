const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 4200;

app.use(bodyParser.json()); 

app.use((err, req, res, next) => {
  if (err) {
    return res.send('Invalid Request data');
  }
  next();
});

app.post('/api/data', (req, res) => {
  const body = req.body || {};
  body.a = Math.ceil(Math.random() * 6);
  res.json(body);
  if (body.command === 'shutdown') {
    setTimeout(() => process.exit(2));
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}`))
