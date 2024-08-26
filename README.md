# Express.js backend + Docker

Express.js backend using Docker and PostgreSQL.

## With Docker

Execute `docker compose up --build` to build and start the project.
If you want to stop and remove everything associated to this project from your docker, execute `docker compose down -v --rmi 'all'`

## Tools

- Node.js
- Javascript
- Express.js
- Adminer
- PostgreSQL

## Files

- Folder `backend` contains the main Express project, node dependencies, bash startup scripts and Docker files.
- Folder `db` contains a schema for the example DB.
- `.env.example` should be edited to `.env` and used as a connector for the database.
- `compose.yml` defines the different services present on the project.

## Localhost

- [http://localhost:8080](http://localhost:8080) for db manager.
- [http://localhost:3000](http://localhost:3000) for Express server.
