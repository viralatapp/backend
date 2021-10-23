const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const petTypes = ['dog', 'cat'];
const sexList = ['male', 'female'];

const petSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: petTypes,
      default: 'dog',
    },
    race: {
      type: String,
      default: 'stray',
    },
    sex: {
      type: String,
      enum: sexList,
      default: 'male',
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
