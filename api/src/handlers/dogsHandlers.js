const {createDog,getById,getByName, getAllDogs, getApiTemp} = require ('../controllers/dogsController')
const {Dogs} = require ("../db")
const axios = require('axios')


/*const getApiInfo = async () => {
    
    try {
        const apiUrl= await axios({
            method: 'get',
            url: "https://api.thedogapi.com/v1/breeds",
            headers: {"Accept-Encoding": "null"}
        })
        console.log(apiUrl)
        
    } catch (error) {
        return error
    }  
} ]*/


const getDogs = async (req,res) => {
   
    try{ 
    const {name} = req.query;
    const dogs = name ? await getByName(name) : await getAllDogs();
    res.status(200).send(dogs)
    }
    catch(error){
    res.status(400).json({error:error.message})
}
}

const getDogById = async (req,res) => {
    try {
        const {idRaza} = req.params;
        const source = isNaN(idRaza) ? "bdd" : "api"
        const user = await getById(idRaza, source)
        res.status(200).json(user)
        }
        catch(error){
            res.status(400).json({error:error.message})
        }
};

const getTemperament = async (req,res) => {
    try {
        const temperaments = await getApiTemp();
        res.status(200).json(temperaments)
        }
        catch(error){
            res.status(400).json({error:error.message})
        }
};

/* NO TENGO QUE DEJAR QUE MI HANLDER INTERACTUE CON EL MODELO */

const createDogs = async (req,res) => {
    try {
        const {name, weight, height, life_span, temperaments, precio} = req.body;
        const newDog = await createDog (name,weight,height,life_span, temperaments, precio)
        res.status(200).json(newDog)
    }
 catch (error){
res.status(400).json({error:error.message})
 }
}
/*async function createDog(name, age, temperaments) {
  const dog = await Dog.create({ name, age });
  const selectedTemperaments = await Temperament.findAll({ where: { name: temperaments } });
  await dog.addTemperaments(selectedTemperaments);
  return dog;
}*/
module.exports = {
    getDogs,
    getDogById,
    createDogs,
    getTemperament
}