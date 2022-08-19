const SyBase = require("node-sybase");
module.exports = new SyBase([
  {
    name: "main2",
    host: "localhost",
    port: 2639,
    dbname: "aces",
    username: "dba",
    password: "sql",
  },
]);
