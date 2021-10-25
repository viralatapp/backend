const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { sponsorshipService } = require('../services');

const createSponsorship = catchAsync(async (req, res) => {
  const sponsorship = await sponsorshipService.createSponsorship(req.body);
  res.status(httpStatus.CREATED).send(sponsorship);
});

const getSponsorships = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['user', 'pet']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await sponsorshipService.querySponsorships(filter, options);
  res.send(result);
});

const getSponsorship = catchAsync(async (req, res) => {
  const sponsorship = await sponsorshipService.getSponsorshipById(req.params.sponsorshipId);
  if (!sponsorship) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Sponsorship not found');
  }
  res.send(sponsorship);
});

const updateSponsorship = catchAsync(async (req, res) => {
  const sponsorship = await sponsorshipService.updateSponsorshipById(req.params.sponsorshipId, req.body);
  res.send(sponsorship);
});

const deleteSponsorship = catchAsync(async (req, res) => {
  await sponsorshipService.deleteSponsorshipById(req.params.sponsorshipId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSponsorship,
  getSponsorships,
  getSponsorship,
  updateSponsorship,
  deleteSponsorship,
};
