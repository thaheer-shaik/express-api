const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");

const app=express();

const port=4000;

app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.get("/", function(req,res)
{
    res.sendFile(__dirname + "/index.html");
});

app.post("/book", function(req,res)
{
    const book=req.body;

    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/book/:isbn', (req, res) => {
    const isbn = req.params.isbn;

    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }
    res.status(404).send('Book not found');
});


app.listen(port, function()
{
    console.log("Server is running on port 4000");
});
