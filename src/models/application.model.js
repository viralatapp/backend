const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const applicationSchema = mongoose.Schema(
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
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
applicationSchema.plugin(toJSON);
applicationSchema.plugin(paginate);

/**
 * @typedef Application
 */
const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
