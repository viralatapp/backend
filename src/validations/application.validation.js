const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createApplication = {
  body: Joi.object().keys({
    user: Joi.required().custom(objectId),
    adoption: Joi.required().custom(objectId),
  }),
};

const getApplications = {
  query: Joi.object().keys({
    user: Joi.custom(objectId),
    adoption: Joi.custom(objectId),
    status: Joi.bool(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getApplication = {
  params: Joi.object().keys({
    applicationId: Joi.string().custom(objectId),
  }),
};

const updateApplication = {
  params: Joi.object().keys({
    applicationId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      user: Joi.custom(objectId),
      adoption: Joi.custom(objectId),
    })
    .min(1),
};

const deleteApplication = {
  params: Joi.object().keys({
    applicationId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createApplication,
  getApplications,
  getApplication,
  updateApplication,
  deleteApplication,
};
