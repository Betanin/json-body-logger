const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const logRequest = (req, res) => {
    console.info(`${req.method} ${req.originalUrl}`);
    console.info(JSON.stringify(req.headers));
    console.info(JSON.stringify(req.body));
    res.status(200).send("Ok");
};

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.post("*", logRequest);

app.patch("*", logRequest);

app.post("*", logRequest);

const port = process.env.APP_PORT || process.env.PORT || 3000;

app.listen(port, () => console.log("Logger running on port.", port));