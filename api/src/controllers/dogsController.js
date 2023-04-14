const {Dogs, Temperaments} = require ("../db.js")
const axios = require ("axios");

function newTempArray(cleanApi) {
  const arrayTemp = new Set();
  for (const dog of cleanApi) {
    if (dog.temperament) {
      const temperaments = dog.temperament.split(", ");
      for (const temperament of temperaments) {
        arrayTemp.add(temperament);
      }
    }
  }
  return [...arrayTemp];
}
const createTemperaments = async (uniqueTemperaments) => {
  for (const temperament of uniqueTemperaments) {
    await Temperaments.create({
      name: temperament
    });
  }
}
const getApiTemp = async () => {

  const api = await axios({
    method: 'get',
    url: `https://api.thedogapi.com/v1/breeds`,
    headers: { "Accept-Encoding": "null" }
  });
  const apiData = api.data;

  const cleanApi = cleanArray(apiData);
  const uniqueTemperaments = newTempArray(cleanApi);
  console.log("soy unique", uniqueTemperaments);
  createTemperaments(uniqueTemperaments);
  return uniqueTemperaments;
}


const createDog = async (name, height, weight, lifeyears, temperaments) => {
  if (!Array.isArray(temperaments)) {
    temperaments = [temperaments];
  }
  const dog = await Dogs.create({ name, height, weight, lifeyears });
  const selectedTemperaments = await Temperaments.findAll({ where: { name: temperaments } });
  await dog.addTemperaments(selectedTemperaments);
  // Consulta que incluye solo el atributo "name" de la tabla Temperaments
  const dogWithTemperaments = await Dogs.findByPk(dog.id,{
    include: {
      model: Temperaments,
      attributes: ['name'],
      through: {
        attributes: []
      }
    }
  });
  const consulta = dog.Temperaments.map(temp => temp.name);
console.log(consulta)
  return dogWithTemperaments;
};


const getByName = async (name) => {
    const db = await Dogs.findAll({ where: { name: name } });
  
    const api = await axios({
      method: 'get',
      url: `https://api.thedogapi.com/v1/breeds`,
      headers: { "Accept-Encoding": "null" }
    });
    const apiData = api.data;
  
    const cleanApi = cleanArray(apiData);
  
    const filteredApi = cleanApi.filter((e) => {
      return e.name.toLowerCase().includes(name.toLowerCase());
    });
  
    return [...db, ...filteredApi];
  };


const cleanArray = (arr) => {
    return arr.map((e) => {
      return {
        id: e.id,
        name: e.name,
        height: e.height,
        weight: e.weight,
        life_span: e.life_span,
        created:false,
        temperament:e.temperament,
        image: e.image,
      };
    });
  };

  
const getAllDogs = async () => {

    const api = await axios({
        method: 'get',
        url: `https://api.thedogapi.com/v1/breeds`,
        headers: {"Accept-Encoding": "null"}
    })
    const apiData = api.data;
    const db = await Dogs.findAll();

    const cleanApi = cleanArray(apiData);

    const allDogs = [...cleanApi, ...db]
    
    console.log(allDogs)
    return allDogs 

 

}
 
const getById = async (idRaza, source) => {
    
    const api= await axios({
        method: 'get',
        url: `https://api.thedogapi.com/v1/breeds`,
        headers: {"Accept-Encoding": "null"}
    });

    const apiData = api.data
    const cleanApi = cleanArray(apiData); 
    const num = parseInt(idRaza);
 
    const apiRes = cleanApi.find((item) => item.id === num);
   
   const dog = source === "api"
    ? await apiRes
    : await Dogs.findByPk(idRaza); 

return dog;
}


module.exports = {
    createDog,
    getById,
    getByName,
    getAllDogs,
    getApiTemp
}