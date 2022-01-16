const express = require("express");
const path = require("path");

const app = express();

// Whenever a page has /static, we are going to server the static directory as usual
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// Make all pages into a single page
//If user req(uests) any frontend page, res(pond) with index.html
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 80, () => console.log("Server running..."));