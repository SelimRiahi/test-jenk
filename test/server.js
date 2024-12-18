// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/data', (req, res) => {
  res.json({ message: "API" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
