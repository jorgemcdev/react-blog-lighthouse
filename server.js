const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self'; connect-src https://example.com/; img-src https://images.pexels.com; frame-src * data: blob: ; style-src 'self' 'sha256-/0X0YHWeSliZcAhirgkuOp5JFYQBmasyiB9MjEQ3lzg=' 'sha256-/0X0YHWeSliZcAhirgkuOp5JFYQBmasyiB9MjEQ3lzg='; font-src 'self'; object-src 'none'",
      );
  next();
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600'); // one year
  res.sendFile('index.html'); 
});

const server = app.listen(process.env.PORT || 3002, () => {
  const { port } = server.address();
  console.log(`Server running on PORT ${port}`);
});