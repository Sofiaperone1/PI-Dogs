const {Router} = require("express");

const {getTemperament} = require ("../handlers/dogsHandlers");

const tempRouter = Router();

tempRouter.get("/", getTemperament);


module.exports = tempRouter;