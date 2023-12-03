const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('.')); // Serves resources from public folder

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Noori's Cybersecurity Solutions website listening at http://localhost:${port}`);
});
