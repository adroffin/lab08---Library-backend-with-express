import express from "express";
import libraryRoutes from "./routes/libraryRoutes.js"; // Asegúrate de que la ruta es correcta

const app = express();
const port = 3000;

app.use(express.json());
app.use("/routes", libraryRoutes); // Usamos las rutas definidas en libraryRoutes.js

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});
