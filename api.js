const express = require('express');
const https = require('https');
const app = express();
const port = process.env.PORT || 4200;

const API_HOST = 'jsonplaceholder.typicode.com';

app.get('/api/todos', doProxy);
app.get('/api/todos/:id', doProxy);

app.listen(port, () => console.log(`Server is running on port ${port}`))

function doProxy(request, response) {
  const todoProxy = https.request({
    hostname: API_HOST,
    path: request.url.replace(/^\/api/, ''),
    method: request.method,
  }, (proxyRes) => {
    response.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(response, { end: true });
  });
  request.pipe(todoProxy, { end: true });
}