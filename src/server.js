import server from "./app.js";

const port = 8007;

server.listen(port, () => {
  console.log(`server listening in ${port} port`);
});
