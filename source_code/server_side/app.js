const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000; //Port on which my server is running

// Helps to parse the JSON
app.use(express.json());
app.use(cors());

// Logic for addition two numbers
app.post('/add', (req, res) => {
  const { numOne, numTwo } = req.body;

  if (numOne == null || numTwo == null) {
    return res.status(400).json({ error: 'Please enter valid inputs' });
  }

  const response = numOne + numTwo;
  res.json({ sum: response });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
