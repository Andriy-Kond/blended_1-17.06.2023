// Cannot GET /api/v1/cars
const carsController = require("../controllers/CarsController");

const carsRoutes = require("express").Router();

//Add a car
carsRoutes.post(
  "/cars",
  (req, res, next) => {
    console.log("JOI");
    next();
  },
  carsController.addCar
);
//Get all cars
carsRoutes.get("/cars", carsController.getAll);
//Get single car
carsRoutes.get("/cars/:id", carsController.getOne);
//Update car
carsRoutes.put("/cars/:id", carsController.updateCar);
//Delete car
carsRoutes.delete("/cars/:id", carsController.removeCar);

module.exports = carsRoutes;
