import express from "express";

const server = express();
const port = process.env.PORT;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));

server.listen(port, () =>
  console.log(`Server is listening on port ${port}...`)
);
