const httpStatus = require('http-status');
const { Application } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create an application
 * @param {Object} applicationBody
 * @returns {Promise<Application>}
 */
const createApplication = async (applicationBody) => {
  return Application.create(applicationBody);
};

/**
 * Query for applications
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryApplications = async (filter, options) => {
  const applications = await Application.paginate(filter, options);
  return applications;
};

/**
 * Get application by id
 * @param {ObjectId} id
 * @returns {Promise<Application>}
 */
const getApplicationById = async (id) => {
  return Application.findById(id);
};

/**
 * Update application by id
 * @param {ObjectId} applicationId
 * @param {Object} updateBody
 * @returns {Promise<Application>}
 */
const updateApplicationById = async (applicationId, updateBody) => {
  const application = await getApplicationById(applicationId);
  if (!application) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Pet not found');
  }
  Object.assign(application, updateBody);
  await application.save();
  return application;
};

/**
 * Delete pet by id
 * @param {ObjectId} applicationId
 * @returns {Promise<Application>}
 */
const deleteApplicationById = async (applicationId) => {
  const application = await getApplicationById(applicationId);
  if (!application) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Application not found');
  }
  await application.remove();
  return application;
};

module.exports = {
  createApplication,
  queryApplications,
  getApplicationById,
  updateApplicationById,
  deleteApplicationById,
};
