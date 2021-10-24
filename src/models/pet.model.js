const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const petTypes = ['dog', 'cat'];
const sexList = ['male', 'female'];

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
