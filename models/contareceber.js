const SyBase = require("../db");

module.exports = () => {
  const { STRING, INTEGER, DATE, DECIMAL } = SyBase;

  return SyBase.define(
    "ContaReceber",
    {
      CodContaReceber: {
        type: INTEGER,
        primaryKey: true,
      },
      Historico: {
        type: STRING,
      },
      Valor: {
        type: DECIMAL,
      },
    },
    {
      tableName: "ContaReceber",
      rtrim: true,
    }
  );
};
