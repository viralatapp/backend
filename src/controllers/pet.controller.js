const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { petService } = require('../services');

const createPet = catchAsync(async (req, res) => {
  const pet = await petService.createPet(req.body);
  res.status(httpStatus.CREATED).send(pet);
});

const getPets = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'type']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await petService.queryPets(filter, options);
  res.send(result);
});

const getPet = catchAsync(async (req, res) => {
  const pet = await petService.getPetById(req.params.petId);
  if (!pet) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Pet not found');
  }
  res.send(pet);
});

const updatePet = catchAsync(async (req, res) => {
  const pet = await petService.updatePetById(req.params.petId, req.body);
  res.send(pet);
});

const deletePet = catchAsync(async (req, res) => {
  await petService.deletePetById(req.params.petId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createPet,
  getPets,
  getPet,
  updatePet,
  deletePet,
};
