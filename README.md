## BOOK LIBRARY API

Final back-end module project with Manchester Codes.

This project creates an app for managing a book library, using Sequelize, databases and Express.
An API was created to perform CRUD operations on a database. This will take JSON GET, POST, PATCH, PUT and DELETE requests to create, read, update or delete readers, books and genres from the database.

## INSTALLATION

Fork and clone this repo.
Change in the repo directory, cd book-library.


## SETTING UP THE DATABASE

This setup will assume that you are running MySql in Docker. To setup the docker container run: 

docker run -d -p 3306:3307 --name book_library -e MYSQL_ROOT_PASSWORD=<PASSWORD> mysql

To start the database, run:

docker start book_library

To stop the database, run: 

docker stop book_library

The create-database and drop-database scripts will run automatically before and after your tests to handle the database setup & teardown.

Create file in your project root .env.test and add the same local variables as .env and make sure that the DB_NAME has a different name.

- npm test uses Mocha and Supertest to run end2end tests in test folder.

## RUNNING THE DATABASE

Run npm install to create a new file in project root .env and add local variables such as:

- DB_PASSWORD
- DB_NAME
- DB_USER
- DB_HOST
- DB_PORT
- PORT

To run the project - npm start

To run the tests - npm test 

