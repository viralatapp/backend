const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createSponsorship = {
  body: Joi.object().keys({
    user: Joi.required().custom(objectId),
    pet: Joi.required().custom(objectId),
    validUntil: Joi.required().date(),
    paymentMethod: Joi.required().date(),
  }),
};

const getSponsorships = {
  query: Joi.object().keys({
    user: Joi.custom(objectId),
    pet: Joi.custom(objectId),
    paymentMethod: Joi.date(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getSponsorship = {
  params: Joi.object().keys({
    sponsorshipId: Joi.string().custom(objectId),
  }),
};

const updateSponsorship = {
  params: Joi.object().keys({
    sponsorshipId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      user: Joi.custom(objectId),
      pet: Joi.custom(objectId),
      validUntil: Joi.date(),
      paymentMethod: Joi.date(),
    })
    .min(1),
};

const deleteSponsorship = {
  params: Joi.object().keys({
    sponsorshipId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSponsorship,
  getSponsorships,
  getSponsorship,
  updateSponsorship,
  deleteSponsorship,
};
