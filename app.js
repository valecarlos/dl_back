const express = require('express');
const multer = require('multer');
const path = require('path');

// Init app
const app = express();
const port = 3005;

app.listen(port, () => console.log(`Server started on port ${port}`));