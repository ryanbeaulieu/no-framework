const express = require('express');
const path = require('path');

const port = process.env.PORT || 8888;

const app = express();

app.use("/static", express.static(path.resolve("frontend", "static")));

app.get("/*", (req,res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
})

app.listen(port, () => {
    console.log("Server running on port " + port);
})