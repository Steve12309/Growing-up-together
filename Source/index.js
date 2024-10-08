const express = require("express");
const app = express();
const port = 5500;
const { engine } = require("express-handlebars");
const path = require("path");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "Resource/Views"));
app.use("/img", express.static(path.join(__dirname, "..", "img")));
app.use(express.static(path.join(__dirname, "Public/CSS/")));
app.use(express.static(path.join(__dirname, "Public/JS/")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main",
  })
);

app.get("/", function (req, res) {
  res.render("home", {
    layout: "main",
    header: "header.css",
    mainStyle: "home.css",
  });
});

app.get("/support-knowledge", function (req, res) {
  res.send("Support Knowledge Page");
});

app.get("/relaxation", function (req, res) {
  res.send("Relaxation Page");
});

app.get("/develop-yourself", function (req, res) {
  res.send("Develop Yourself Page");
});

app.get("/experiences", function (req, res) {
  res.send("Experiences Page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
