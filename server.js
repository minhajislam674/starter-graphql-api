const path = require("path");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

// const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql")); This is an alternative way to do the same thing
const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});

const schema = makeExecutableSchema({
  typeDefs: typesArray,
});

const root = {
  products: require("./products/products.model"),
  orders: require("./orders/orders.model"),
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    rootValue: root,
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("GraphQL server is running on port 4000");
});
