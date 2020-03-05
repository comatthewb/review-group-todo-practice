const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("./dist"));

app.get("/home", (req, res) => res.send("hello world"));

app.listen(port, () => console.log(`app is listening on port ${port}`));
