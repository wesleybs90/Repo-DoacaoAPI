'use strict';
module.exports = (sequelize, DataTypes) => {
  const Itens = sequelize.define('itens', {
    id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {});
  Itens.associate = function(models) {
    // associations can be defined here
  };
  return Itens;
};