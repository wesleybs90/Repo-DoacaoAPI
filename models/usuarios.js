'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define('usuarios', {
    id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.INTEGER
  }, {});
  Usuarios.associate = function(models) {
    // associations can be defined here
    
  };
  return Usuarios;
};