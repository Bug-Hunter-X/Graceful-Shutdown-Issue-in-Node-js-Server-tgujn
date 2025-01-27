const express = require('express');
const app = express();
app.get('/', (req, res) => {
  //Simulate a delay to demonstrate the issue
  setTimeout(() => {
    res.send('Hello!');
  }, 5000);
});

const server = app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed');
  });
});

//Adding a timeout to ensure the server shuts down even if close doesn't complete immediately
process.on('SIGINT', () => {
  setTimeout(() => {
    process.exit(0);
  }, 10000); // wait up to 10 seconds
});