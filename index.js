import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;


let posts = [];
  

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index", {posts});
});

//creating a new post
app.post('/', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        userName: req.body.userName,
        userText: req.body.userText,
    };
    posts.push(newPost);
    res.redirect('/');
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