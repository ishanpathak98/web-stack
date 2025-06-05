const express = require('express');
const app = express();
app.get('/api', (req, res) => res.json({ message: "Hello from Node.js API!" }));
app.listen(5000, () => console.log('Node.js server running on port 5000'));
