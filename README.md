# websocket-chat #
## Installation ##

### Frontend
* Move to `frontend` folder
* Run `npm install` script
* Configure the server host in the `src/config.ts`
* Run `npm build` script

### Backend
* Move to `backend folder`
* Run `npm install` script
* Configure your `.env` file in the `backend` folder:
  * `PORT` - Server port (default: 8080)
  * `DB_USER` - Postgres username
  * `DB_HOST` - Postgres database host
  * `DB_NAME` - Postgres database name
  * `DB_PORT` - Postgres database port
  * `DB_PASSWORD` - Postgres user password
  * `CLIENT_HOST` - Client host (default: http://localhost:8080) 
* Run the `database/schema.sql` to create postgres database schema

## Start
* Run `npm start` script in `backend` folder
