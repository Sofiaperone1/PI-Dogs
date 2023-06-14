require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: 'dogs', // Nombre de tu base de datos
  logging: false, // Establece logging en "false" para deshabilitar el registro de consultas SQL en la consola
  native: false, // Utiliza "false" si no has instalado el paquete "pg-native"
});

const basename = path.basename(__filename);
const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y los agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, 'models'))
  .filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, 'models', file)));
  });

// Importamos los modelos y los vinculamos a la conexión de Sequelize
modelDefiners.forEach((model) => model(sequelize));
const { Dogs, Temperaments } = sequelize.models;

// Definimos las relaciones entre los modelos
Dogs.belongsToMany(Temperaments, { through: 'DogsTemp' });
Temperaments.belongsToMany(Dogs, { through: 'DogsTemp' });

module.exports = {
  sequelize,
  Dogs,
  Temperaments,
};