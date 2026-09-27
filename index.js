import express from "express";
import ejs from "ejs";

const app = express();
const port = 4000;

app.use(express.static("public"));
app.set('view engine', 'ejs');


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

app.get("/", (req,res)  => {
  res.render("index.ejs")
});

app.get("/greeting", (req,res)  => {
  res.render("greeting.ejs")
});

app.get("/btns", (req,res)  => {
  res.render("btns.ejs")
});

app.get("/gift", (req,res)  => {
  res.render("gift.ejs")
});



app.get("/letter", (req,res)  => {
  res.render("letter.ejs")
});

app.get("/photos", (req,res)  => {
  res.render("photos.ejs")
});

app.get("/teddy", (req,res)  => {
  res.render("teddy.ejs")
});


