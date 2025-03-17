import express from "express";
const router = express.Router();

let books = []; // Array para almacenar los libros temporalmente

// Obtener todos los libros
router.get("/books", (req, res) => {
  res.json(books);
});

// Obtener información detallada de un libro usando el parámetro de id.
router.get("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((book) => book.id === bookId);

  if (book) {
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  }
});

// Agregar un nuevo libro
router.post("/books", (req, res) => {
  const { id, title, author, genre } = req.body;

  if (!id || !title || !author || !genre) {
    return res
      .status(400)
      .send("The request body does not contain all the required fields");
  }

  const newBook = { id, title, author, genre };
  books.push(newBook);
  res.status(201).send("Book added successfully");
});

// Actualizar un libro existente
router.put("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const { id, title, author, genre } = req.body;

  if (!id || !title || !author || !genre) {
    return res
      .status(400)
      .send("The request body does not contain all the required fields");
  }

  books = books.map((book) =>
    book.id === bookId ? { id, title, author, genre } : book
  );
  res.send("Book updated successfully");
});

// Eliminar un libro por ID
router.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter((book) => book.id !== bookId);
  res.send("Book deleted successfully");
});

export default router;
