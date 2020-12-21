const express = require("express");
const app = express();
const port = 3000;

const logMiddleware = function (req, res, next) {
    console.log(`New request. Timestamp ${new Date()}`);
    next();
};
app.use(logMiddleware);

app.use("/", express.static("./site"));

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);