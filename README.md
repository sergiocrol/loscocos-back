# Los Cocos Bungalows
![frontend](https://res.cloudinary.com/drcjcovjy/image/upload/v1570420074/loscocos/loscocos_zecrkr.png)

## Deploy

Para ver el proyecto en funcionamiento: [Los Cocos](https://sergiocrol.github.io/loscocos-front/)

## ¿En qué consiste?

El proyecto representa la página web de un hotel, que permite filtrar habitaciones en base a criterios de búsqueda introducidos por el usuario (fechas de entrada y salida, así como número de huéspedes). 
Además, el usuario podrá interactuar con los datos a fin de ver el precio final de la habitación y proceder al pago de la misma.

## ¿Qué tecnologías se han utilizado?

El reto que me he propuesto para realizar el proyecto ha sido utilizar únicamente Javascript, sin ningún tipo de framework.

Backend: he creado una REST API con Node.js que se nutre de un archivo JSON con los datos de las habitaciones a modo de base de datos. <br>
Frontend: Una Single Page Application mediante JS y Hash-Based routing que realiza llamadas a la API con los parámetros de búsqueda introducidos por el usuario para obtener las habitaciones disponibles.

### Otros modos de afrontar el proyecto

Aunque la idea ha sido realizar un proyecto entero con JS puro; si tuviera que realizar el proyecto de nuevo sin ningún tipo de limitación, probablemente optaría por los siguientes frameworks y librerías: 

Backend: REST API Node.js y ExpressJS. Base de datos con MongoDB/Mongoose. <br>
Frontend: SPA con React.

## Backend

Para facilitar el uso del proyecto, he realizado deploy en Heroku de la API. El proyecto, tanto en local como en su versión en producción, apunta a esta API para obtener los datos de las habitaciones.

En el siguiente enlace de github puede verse el código: [Los Cocos API](https://github.com/sergiocrol/loscocos-back) <br>
Para ver el archivo JSON con los datos de las habitaciones: [Los Cocos Rooms](https://github.com/sergiocrol/loscocos-back/blob/master/data/rooms.json)

En caso de querer desplegar en local la API:

### Clonar repositorio

```bash
git clone git@github.com:sergiocrol/loscocos-back.git
```

### Instalar dependencias

Sólo hace uso de "dotenv"

```
npm install
```
### Ejecutar app

Se abrirá en el puerto 4000

```
npm start
```
O para utilizar nodemon:

```
npm run dev
```

## Frontend

Existe una versión en producción de la web que puede verse desde el siguiente enlace: [Los Cocos](https://sergiocrol.github.io/loscocos-front/)

En cualquier caso, si se quiere ejecutar en local (en ocasiones la versión deploy puede ir algo lenta), tan solo sería necesario cambiar la variable "baseURL" del archivo "api/api.js" que apunta a la versión deploy, por la url "http://localhost:4000/".


## Enlaces

### Git

[Repositorio Backend](https://github.com/sergiocrol/loscocos-back)
[Repositorio Frontend](https://github.com/sergiocrol/loscocos-front)

### Deployment

[Deployment Proyecto](https://sergiocrol.github.io/loscocos-front/)
[Deployment API](https://loscocosapi.herokuapp.com/)

### Author

[Sergio Cordero Rol](https://github.com/sergiocrol)
