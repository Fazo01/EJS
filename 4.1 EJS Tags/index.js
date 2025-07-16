import express from "express";
// import {fileURLToPath} from "url";//create a path
// import path from "path";//create a dirname
const app = express();
const port = 3000;

// const __filename=fileURLToPath(import.meta.url)//create a path
// const __dirname=path.dirname(__filename)

// app.set("view engine", "ejs");
// app.set("views",path.join(__dirname,"views"));


app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",//<%- <h1>Hello</h1>%>    Render HTML we have element in this object
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
