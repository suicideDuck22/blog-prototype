//Calling the dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//Set port and instance express in const app
const PORT = process.env.PORT || 8080;
const app = express();

app.use("/admin", require("./routes/admin"));

//Body-Parser configs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json);

//EJS configs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "views/"));



//Running server
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});