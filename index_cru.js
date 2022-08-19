const SyBase = require("node-sybase");
const { STRING, INTEGER, DATE, DECIMAL } = SyBase;

//DEFININDO CONEXAO
const Server = new SyBase([
  {
    name: "main",
    host: "localhost",
    port: 2639,
    dbname: "aces",
    username: "dba",
    password: "sql",
  },
]);

//EXECUTAR QUERY DIRETO PELO POOL
Server.DBPools.main
  .execute("SELECT * FROM Usuario", (Retorno_Callback_da_execucao) => {
    console.log("Retorno_Callback_da_execucao", Retorno_Callback_da_execucao);
  })
  .then((Resultado_Query) => {
    console.log(
      "\n\n>>>>>>>\nResultado Select Usuarios 1: ",
      Resultado_Query.map((obj) => obj.NomeLegivel)
    );
    console.log("<<<<<<\n\n");
  })
  .catch((err) => console.log("\n\n>>>>>>>\nErro na execução 1:", err));

//EXECUTAR QUERY DIRETO PELA DEFAULT POOL
Server.exec("SELECT * FROM Usuario")
  .then((Resultado_Query) => {
    console.log(
      "\n\n>>>>>>>\nResultado Select Usuarios 2: ",
      Resultado_Query.map((obj) => obj.NomeLegivel)
    );
    console.log("<<<<<<\n\n");
  })
  .catch((err) => console.log("\n\n>>>>>>>\nErro na execução 2:", err));

//ADIONAR POOL NOVO
Server.addPool({
  name: "main2",
  host: "localhost",
  port: 2639,
  dbname: "aces",
  username: "dba",
  password: "sql",
});

//EXECUTAR QUERY DIRETO PELA DEFAULT POOL
Server.exec("SELECT * FROM Usuario", Server.DBPools.main2)
  .then((Resultado_Query) => {
    console.log(
      "\n\n>>>>>>>\nResultado Select Usuarios 3: ",
      Resultado_Query.map((obj) => obj.NomeLegivel)
    );
    console.log("<<<<<<\n\n");
  })
  .catch((err) => console.log("\n\n>>>>>>>\nErro na execução 3:", err));
