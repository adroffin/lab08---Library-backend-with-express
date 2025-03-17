let books = []; // Array para almacenar los libros temporalmente

// Obtener información de un libro por ID
export const getBookById = (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((book) => book.id === bookId);

  if (book) {
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  }
};

// Agregar un nuevo libro
export const addBook = (req, res) => {
  const { id, title, author, genre } = req.body;

  if (!id || !title || !author || !genre) {
    return res
      .status(400)
      .send("The request body does not contain all the required fields");
  }

  const newBook = { id, title, author, genre };
  books.push(newBook);
  res.status(201).send("Book added successfully");
};

// Actualizar un libro existente
export const updateBook = (req, res) => {
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
};

// Eliminar un libro por ID
export const deleteBook = (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter((book) => book.id !== bookId);
  res.send("Book deleted successfully");
};
