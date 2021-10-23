const httpStatus = require('http-status');
const { Adoption } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create an adoption
 * @param {Object} adoptionBody
 * @returns {Promise<Adoption>}
 */
const createAdoption = async (adoptionBody) => {
  return Adoption.create(adoptionBody);
};

/**
 * Query for adoptions
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryAdoptions = async (filter, options) => {
  const adoptions = await Adoption.paginate(filter, options);
  return adoptions;
};

/**
 * Get adoption by id
 * @param {ObjectId} id
 * @returns {Promise<Adoption>}
 */
const getAdoptionById = async (id) => {
  return Adoption.findById(id);
};

/**
 * Update adoption by id
 * @param {ObjectId} adoptionId
 * @param {Object} updateBody
 * @returns {Promise<Adoption>}
 */
const updateAdoptionById = async (adoptionId, updateBody) => {
  const adoption = await getAdoptionById(adoptionId);
  if (!adoption) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Pet not found');
  }
  Object.assign(adoption, updateBody);
  await adoption.save();
  return adoption;
};

/**
 * Delete pet by id
 * @param {ObjectId} adoptionId
 * @returns {Promise<Adoption>}
 */
const deleteAdoptionById = async (adoptionId) => {
  const adoption = await getAdoptionById(adoptionId);
  if (!adoption) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Adoption not found');
  }
  await adoption.remove();
  return adoption;
};

module.exports = {
  createAdoption,
  queryAdoptions,
  getAdoptionById,
  updateAdoptionById,
  deleteAdoptionById,
};
