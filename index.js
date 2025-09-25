const express = require("express");
const app = express();
const port = 3000;
const bookRouters = require('./routes/books')

app.use(express.json());
app.use("/api/books",bookRouters);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });