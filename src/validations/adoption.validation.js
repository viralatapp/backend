const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createAdoption = {
  body: Joi.object().keys({
    user: Joi.required().custom(objectId),
    pet: Joi.required().custom(objectId),
    active: Joi.boolean().required(),
  }),
};

const getAdoptions = {
  query: Joi.object().keys({
    user: Joi.custom(objectId),
    pet: Joi.custom(objectId),
    active: Joi.boolean(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getAdoption = {
  params: Joi.object().keys({
    adoptionId: Joi.string().custom(objectId),
  }),
};

const updateAdoption = {
  params: Joi.object().keys({
    adoptionId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      user: Joi.custom(objectId),
      pet: Joi.custom(objectId),
      active: Joi.boolean(),
    })
    .min(1),
};

const deleteAdoption = {
  params: Joi.object().keys({
    adoptionId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createAdoption,
  getAdoptions,
  getAdoption,
  updateAdoption,
  deleteAdoption,
};
