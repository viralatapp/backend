const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const PET_TYPES = ['dog', 'cat'];
const SEX_LIST = ['male', 'female'];

const petSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: PET_TYPES,
      default: 'dog',
    },
    breed: {
      type: String,
      default: 'stray',
    },
    sex: {
      type: String,
      enum: SEX_LIST,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
petSchema.plugin(toJSON);
petSchema.plugin(paginate);

/**
 * @typedef Pet
 */
const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
