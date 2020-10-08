const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const app = express();
const PORT = 4000;
const orderRouter = require("./routers/order");
const productRouter = require("./routers/product");
const db = require("./models");
const cors = require("cors");

const { typeDefs } = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

app.use(cors());
app.use(express.json());

app.use("/orders", orderRouter);
app.use("/products", productRouter);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, db }),
});
server.applyMiddleware({ app });

app.listen(PORT, () => console.log("server up and listening"));
