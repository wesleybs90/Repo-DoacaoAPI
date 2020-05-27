'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item_trocas = sequelize.define('item_trocas', {
    id: DataTypes.INTEGER,
    id_troca: DataTypes.INTEGER,
    id_item: DataTypes.INTEGER
  }, {});
  Item_trocas.associate = function(models) {
    // associations can be defined here
    
  };
  return Item_trocas;
};