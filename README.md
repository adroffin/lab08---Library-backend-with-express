# lab08---Library-backend-with-express
Link CodeSandBox: https://codesandbox.io/p/devbox/lab08-23004161-zsfjp8

Para correr el servidor de manera local:
1. Abrir una terminal
2. Navegar hasta el repositorio del proyecto
3. Ejecutar el comando: npm start
4. El url dado se pega en postman si se desean hacer requests.

Para las peticiones:
1. Descargar e instalar Postman: https://www.postman.com/downloads/
2. Correr el servidor de manera local
3. Dentro de postman, tenemos la opcion de hacer una nueva request o importar una coleccion, en este caso sera mejor importar la coleccion adjunta en el repositorio del proyecto
4. Se pueden observar las diferentes peticiones realizadas para la validacion de la api con sus respectivas respuestas, pero si se desea realizar alguna peticion:
    -En el input del menu desplegable tendremos distintas opciones a escoger: GET, POST, PUT y DELETE
    -Para GET: 1. Podemos solo utilizar el url http://localhost:3000/routes/books, lo que nos mostrara el arreglo con todos los libros
               2. Podemos escoger que libro deseamos obtener añadiendolo al final del url como un parametro: http://localhost:3000/routes/books/1 o http://localhost:3000/routes/books/2, dependera del libro que querramos.
    -Para POST: Tenemos que ir al apartado de "Body" y estando ahi habilitamos la opcion de "raw". Estando aqui podemos ingrear el libro que querramos utilizando esta estructura(ejemplo):
            {
                "id":1,
            "title": "Harry Potter and the Sorcerer's Stone",
            "author": "J.K. Rowling",
            "genre": "Fantasy"
            }
    -PARA PUT: La idea es la misma que en POST al momento de ver que dato o datos del libro desaeamos actualizar, se utiliza la misma estructura en Body>raw, solo que para escoger el libro a modificar se debe especificar en la url a modo de parametro: http://localhost:3000/routes/books/1 o http://localhost:3000/routes/books/2
    -PARA DELETE: especificar el libro a eliminar en la url: http://localhost:3000/routes/books/1 o http://localhost:3000/routes/books/2