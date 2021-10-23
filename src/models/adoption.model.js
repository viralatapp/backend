const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const adoptionSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    pet: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Pet',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
adoptionSchema.plugin(toJSON);
adoptionSchema.plugin(paginate);

/**
 * @typedef Adoption
 */
const Adoption = mongoose.model('Adoption', adoptionSchema);

module.exports = Adoption;
