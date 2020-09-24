const { request, response } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

app.listen(3333);

app.get("/", (request, response) => {
    return response.json({
        helloWorld: "Hello World",
        App: "NodeJs App"
    });
});