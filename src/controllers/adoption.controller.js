const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { adoptionService } = require('../services');

const createAdoption = catchAsync(async (req, res) => {
  const adoption = await adoptionService.createAdoption(req.body);
  res.status(httpStatus.CREATED).send(adoption);
});

const getAdoptions = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['user', 'pet']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await adoptionService.queryAdoptions(filter, options);
  res.send(result);
});

const getAdoption = catchAsync(async (req, res) => {
  const adoption = await adoptionService.getAdoptionById(req.params.adoptionId);
  if (!adoption) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Adoption not found');
  }
  res.send(adoption);
});

const updateAdoption = catchAsync(async (req, res) => {
  const adoption = await adoptionService.updateAdoptionById(req.params.adoptionId, req.body);
  res.send(adoption);
});

const deleteAdoption = catchAsync(async (req, res) => {
  await adoptionService.deleteAdoptionById(req.params.adoptionId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createAdoption,
  getAdoptions,
  getAdoption,
  updateAdoption,
  deleteAdoption,
};
