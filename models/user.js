const SyBase = require("../db");

module.exports = () => {
  const { STRING, INTEGER, DATE, DECIMAL } = SyBase;

  return SyBase.define(
    "UsuarioGrupo",
    {
      CodUsuario: {
        type: INTEGER,
      },
      CodGrupoUsuario: {
        type: INTEGER,
      },
    },
    {
      tableName: "UsuarioGrupo",
      /* 配置表中所有的字符串在查询时都加上rtrim转化 */
      rtrim: true,
    }
  );
};
