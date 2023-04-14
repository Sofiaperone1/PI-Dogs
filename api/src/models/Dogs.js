const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dogs', {
    id:{
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
    type: DataTypes.INTEGER
    },
    weight: {
      type:DataTypes.INTEGER
    },
    life_span:{
      type:DataTypes.INTEGER
    },
    created:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  //  img:{
  //  type:DataTypes.BLOB
  //  }
  },{timestamps:false});
};
