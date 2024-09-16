const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const db = require('./database'); // Import the database connection

app.get('/', (req, res) => {
  db.query('SELECT 1 + 1 AS solution', (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      res.status(500).send('Database query error');
      return;
    }
    res.send('The solution is: ' + results[0].solution);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
