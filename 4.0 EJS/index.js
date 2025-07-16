import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const d = new Date();
  let day = d.getDay();
  let Todayday01 = "weekday";
  let advice01 = "it's time to work hard";
  
  if (day === 0 || day === 6) {
    Todayday01 = "weekend";
    advice01 = "it's time to work hard";
  }
  res.render("index.ejs",{
    Todayday:Todayday01,
    advice:advice01
  });
});

app.listen(PORT, () => {
  console.log(`Server link http://localhost:${PORT}`);
});
