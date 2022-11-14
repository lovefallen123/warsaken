// Import Express NPM library
import express from 'express';

// Declare the port to listen to and initialise Express
const PORT = 3000;
const app = express();

// Define a route and corresponding middleware function
app.get('/', (req, res) => {
  res.send('Hello, World!')
});

// Start the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
});