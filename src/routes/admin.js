const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
    response.send("Main page of admin panel");
});

router.get("/posts", (request, response) => {
    response.send("Posts page");
});

router.get("/categories", (request, response) => {
    response.send("Categories page");
});

module.exports = router;