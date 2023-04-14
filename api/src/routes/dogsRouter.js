const {Router} = require("express");

const {getDogs,getDogById, getByName, createDogs} = require ("../handlers/dogsHandlers");

const dogsRouter = Router();

dogsRouter.get("/", getDogs);

dogsRouter.get("/:idRaza", getDogById) ;

dogsRouter.get("/?name=", getDogs);

dogsRouter.post("/", createDogs);

module.exports = dogsRouter;