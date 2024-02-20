const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('server.json');
const middlewares = jsonServer.defaults();

server.use(cors());

server.use((req, res, next) => {
  console.log(JSON.stringify(req.headers));

  return next();
});

server.use(middlewares);
server.use(router);

server.listen(5001, () => {
  console.log('JSON Server is running');
});