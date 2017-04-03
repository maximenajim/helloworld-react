const express = require('express');
const fs = require('fs');

const jsPath = 'bundle.js';
const template = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Universal React App</title>
  </head>
  <body>
    <div id="container"></div>
    <script type="text/javascript" src="${jsPath}"></script>
  </body>
</html>
`;
const server = express();
server.use('/', express.static('build/client'));
server.get('*', (req, res) => res
  .send(template));
server.listen(3000);
