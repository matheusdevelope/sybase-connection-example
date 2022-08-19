const SyBase = require("./db");

SyBase.use(__dirname + "/models");

//DEFINIR POOL DO ContaReceber
SyBase.models.UsuarioGrupo.by(SyBase.DBPools.main2);
SyBase.models.ContaReceber.by(SyBase.DBPools.main2);

//
SyBase.models.UsuarioGrupo.findAll()
  .then((Resultado_Query) => {
    console.log(
      "\n\n>>>>>>>\nResultado Select findAll UsuarioGrupo: ",
      Resultado_Query //.map((obj) => obj.NomeLegivel)
    );
    console.log("<<<<<<\n\n");
  })
  .catch((err) => console.log("\n\n>>>>>>>\nErro na execução 4:", err));

SyBase.models.ContaReceber.findOne({ CodContaReceber: "9", CodEmpresa: 1 })
  .then((Resultado_Query) => {
    console.log(
      "\n\n>>>>>>>\nResultado Select findOne Conta Receber: ",
      Resultado_Query //.map((obj) => obj.NomeLegivel)
    );
    console.log("<<<<<<\n\n");
  })
  .catch((err) =>
    console.log("\n\n>>>>>>>\nErro na execução ContaReceber:", err)
  );

SyBase.models.ContaReceber.findByID(10)
  .then((Resultado_Query) => {
    console.log(
      "\n\n>>>>>>>\nResultado Select Dy ID Conta Receber: ",
      Resultado_Query //.map((obj) => obj.NomeLegivel)
    );
    console.log("<<<<<<\n\n");
  })
  .catch((err) =>
    console.log("\n\n>>>>>>>\nErro na execução ContaReceber:", err)
  );
