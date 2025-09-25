const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

let books = [
    { id: uuidv4(), title: "Book One" },
    { id: uuidv4(), title: "Book Two" }
  ];

router.get("/",(req,res)=>{
    res.json(books);
});

router.get("/:id", (req,res) => {
    const book = books.find(b => b.id === req.params.id);
    if(!book){
        return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
});

router.post("/add",(req,res) => {
    const { title } = req.body;
    if(!title){
        return res.status(400);
    }
    const newBook = { id: uuidv4() , title};
    books.push(newBook);
    res.status(201).json(newBook);
});

router.patch("/change/:id" , (req,res) => {
    const book = books.find(b => b.id === req.params.id);
    if(!book){
        return res.status(404).json({ message: "Book not found" });
    }
    const { title } = req.body;
    if (title){
        book.title = title;
    }
    res.json(book);
});

router.delete("/delete/:id" , (req,res) => {
    const index = books.findIndex(b => b.id === req.params.id);
    if(index === -1){
        return res.status(404).json({ message: "Book not found" });
    }
    const delBook = books.splice(index,1);
    res.json(delBook);
});

module.exports =  router;