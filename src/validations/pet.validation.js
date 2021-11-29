const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createPet = {
  body: Joi.object().keys({
    user: Joi.required().custom(objectId),
    name: Joi.string().required(),
    age: Joi.number(),
    weight: Joi.number(),
    description: Joi.string().required(),
    breed: Joi.string(),
    type: Joi.string().required().valid('dog', 'cat'),
    sex: Joi.string().required().valid('male', 'female'),
    address: Joi.string().required(),
    images: Joi.array(),
  }),
};

const getPets = {
  query: Joi.object().keys({
    user: Joi.custom(objectId),
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getPet = {
  params: Joi.object().keys({
    petId: Joi.string().custom(objectId),
  }),
};

const updatePet = {
  params: Joi.object().keys({
    petId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      age: Joi.number(),
      weight: Joi.number(),
      description: Joi.string(),
      breed: Joi.string(),
      type: Joi.string().valid('dog', 'cat'),
      sex: Joi.string().valid('male', 'female'),
      address: Joi.string(),
      images: Joi.array(),
    })
    .min(1),
};

const deletePet = {
  params: Joi.object().keys({
    petId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createPet,
  getPets,
  getPet,
  updatePet,
  deletePet,
};
