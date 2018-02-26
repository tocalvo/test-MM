# Backend Test MM

Backend con NodeJs y Express

- Instalar dependencias con "npm install"
- Ejecutar "node index.js" para lanzarlo

## 
En la carpeta de res se encuentra el fichero de configuración que tendrá todas las variables de entorno, si por ejemplo hubiera persistencia en mongo, se pondría la url y los datos para la autenticación.

En el fichero de index se crea el servidor, se configura express, se añaden las rutas y se lanza.
Se pone un listener al process.on('uncaughtException') para evitar que el bakend se reinicie si ocurre un error. Habría que añadir en ese punto un sistema que tenga ese log.

En el fichero de express.js se configura todo lo relativo al servidor http, por ejemplo se habilita la compresión y se fija un tamaño máximo en las peticiones. También se configura para que se permitan distintos orígenes en entornos de desarrollo.

En el fichero routes.js se definen endpoints de distintas categorías bajo una misma versión, eso permite dar soporte a que puedan convivir distintas versiones de una api.
Se crea una carpeta por categoría de endpoint.
En cada categoría de endopoint se define un índice que relaciona cada endpoint con su controlador.
Es más fácil crear tests sobre los controladores si las funciones están en un ficheros separado.
