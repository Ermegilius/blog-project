import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

const message = {
    userName: "",
    userText: "",
}

const posts = [
    {userName: 'User 1', userText: 'Text 1' },
    {userName: 'User 2', userText: 'Text 2' },
    {userName: 'User 3', userText: 'Text 3' },
    {userName: 'User 4', userText: 'Text 4' },
]

app.set('view engine', 'ejs')
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index", {articles: posts      
    });
});

app.get("/about", (req, res) => {
    res.render("about")
});
app.get("/contact", (req, res) => {
    res.render("contact");    
});
  


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });