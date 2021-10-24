const httpStatus = require('http-status');
const { Pet } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Get pet by id
 * @param {ObjectId} id
 * @returns {Promise<Pet>}
 */
const getPetById = async (id) => {
  return Pet.findById(id);
};

/**
 * Create a pet
 * @param {Object} petBody
 * @returns {Promise<Pet>}
 */
const createPet = async (petBody) => {
  const user = await getPetById(petBody.user);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No user found with this Id.');
  }
  return Pet.create(petBody);
};

/**
 * Query for pets
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryPets = async (filter, options) => {
  const pets = await Pet.paginate(filter, options);
  return pets;
};

/**
 * Update pet by id
 * @param {ObjectId} petId
 * @param {Object} updateBody
 * @returns {Promise<Pet>}
 */
const updatePetById = async (petId, updateBody) => {
  const pet = await getPetById(petId);
  if (!pet) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Pet not found');
  }
  Object.assign(pet, updateBody);
  await pet.save();
  return pet;
};

/**
 * Delete pet by id
 * @param {ObjectId} petId
 * @returns {Promise<Pet>}
 */
const deletePetById = async (petId) => {
  const pet = await getPetById(petId);
  if (!pet) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Pet not found');
  }
  await pet.remove();
  return pet;
};

module.exports = {
  createPet,
  queryPets,
  getPetById,
  updatePetById,
  deletePetById,
};
