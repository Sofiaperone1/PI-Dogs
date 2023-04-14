const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Temperaments', {
    id:{
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
     // no me deja usar el auto increment
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },{timestamps:false});
};
