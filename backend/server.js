const express = require('express');
const fs = require('fs');
const path = require('path');

const port = 6996;

const app = express();

app.use(express.json());



app.listen(port, () => {
  console.log(`the server is running on: https//127.0.0.1:${port}`)
});