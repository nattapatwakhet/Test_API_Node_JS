const express = require('express');
const app = express();
const port = 2121;

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello, this is a test API!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
