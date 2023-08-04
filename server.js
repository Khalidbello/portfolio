// server/server.js
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Sample data
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// Endpoint to fetch items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Serve the React app from the client/build directory
app.use(express.static("build"));

// All remaining requests return the React app, so it can handle routing.
app.get('*', (req, res) => {
  res.sendFile(path.join("build/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
