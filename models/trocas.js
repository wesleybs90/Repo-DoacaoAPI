'use strict';
module.exports = (sequelize, DataTypes) => {
  const trocas = sequelize.define('trocas', {
    id_doador: DataTypes.INTEGER,
    id_receptor: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {});
  trocas.associate = function(models) {
    // associations can be defined here
  };
  return trocas;
};