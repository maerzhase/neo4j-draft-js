# neo4j-draft-js 

#### Install

- downlaod neo4j from their official website
- startup a new neo4j instance
- `npm install`
- create `.env` file:
  ```
  NEO4J_HOST=
  NEO4J_USER=
  NEO4J_PASSWORD=
  ```

## Usage
__WARNING__ the `index.js` currently only contains code tests. it doesnt contain a proper server yet.
run the app with care :) 

#### Initialize Database Schema
`npm run init` will call initialize constraints based on the `static unique = []` of each model.

if you are using neo4j enterprise you can also set requirements on Node properties. 
to activate requirement intitialization set `NEO4J_ENTERPRISE=TRUE` in your `.env` file.
requirements are set in the `static required = []` of each model.

#### Development

`npm start` will start the server in dev mode with `nodemon` watching changes

#### Build

`npm run build` will compile the app with babel


