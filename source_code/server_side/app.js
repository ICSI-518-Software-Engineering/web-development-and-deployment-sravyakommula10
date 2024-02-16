const express = require('express');
const app = express();
const port = 3000; //Port on which my server is running

// Helps to parse the JSON
app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
