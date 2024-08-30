const express = require('express');
// import the ApolloServer class
const { ApploServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

// import authentication middleware
const { authMiddleware } = require("./utils/auth");

// import the two parts of GraphQL schema
const { typeDef, resolvers } = require("./schema");

const path = require('path');
const db = require('./config/connection');

// const routes = require('./routes');

// create new ApolloServer object
const server = new ApploServer({
  typeDef,
  resolvers
});

const app = express();
const PORT = process.env.PORT || 3001;

// create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/grapql", expressMiddleware(server, { context: authMiddleware }));

  // if we're in production, serve client/build as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  app.get("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"))
  });

  db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  });
}

startApolloServer();