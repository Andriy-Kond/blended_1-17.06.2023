const asyncHandler = require('express-async-handler');
// const { isValidObjectId } = require("mongoose");
const isValidID = require('../utils/isValidID');
const carsModel = require('../models/carsModel');

class CarsController {
  // async addCar(req, res) {
  //   try {
  //     const { manufacturer, title } = req.body;
  //     if (!manufacturer || !title) {
  //       res
  //         .status(400)
  //         .json({ code: 400, message: "Provide all required fields" });
  //     }
  //     const car = await carsModel.create({ ...req.body });
  //     res
  //         .status(201)
  //         .json({ code: 201, message: "Success", data: car });
  //   } catch (error) {
  //     res.send(error.message)
  //   }
  // }

  addCar = asyncHandler(async (req, res) => {
    const { manufacturer, title } = req.body;
    if (!manufacturer || !title) {
      res.status(400);
      throw new Error('Provide all required fields');
    }
    const car = await carsModel.create({ ...req.body });
    res.status(201).json({ code: 201, message: 'Success', data: car });
  });

  getAll = asyncHandler(async (req, res) => {
    const result = await carsModel.find({});
    res.status(200).json({
      code: 200,
      message: 'Success',
      data: result,
      qty: result.length,
    });
  });

  getOne = asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!isValidID(id)) {
      res.status(400);
      throw new Error('Not valid ID');
    }

    const oneCar = await carsModel.findById(id);
    if (!oneCar) {
      res.status(400);
      throw new Error('ID not found');
    }
    res.status(200).json({ code: 200, message: 'Success', data: oneCar });
  });

  updateCar = asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!isValidID(id)) {
      res.status(400);
      throw new Error('Not valid ID');
    }
    const updatedCar = await carsModel.findByIdAndUpdate(
      id,
      {
        ...req.body,
      },
      { new: true }
    );
    if (!updatedCar) {
      res.status(400);
      throw new Error('ID not found');
    }
    res.status(201).json({ code: 201, message: 'Success', data: updatedCar });
  });

  removeCar = asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!isValidID(id)) {
      res.status(400);
      throw new Error('Not valid ID');
    }
    const removeCar = await carsModel.findById(id);
    if (!removeCar) {
      res.status(400);
      throw new Error('ID not found');
    }
    await removeCar.deleteOne();
    res.status(201).json({ code: 201, message: 'Success', data: removeCar });
  });
}

module.exports = new CarsController();
