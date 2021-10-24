const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const STATUS_LIST = ['pending', 'accepted', 'rejected', 'done'];

const applicationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    adoption: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Adoption',
      required: true,
    },
    status: {
      type: Boolean,
      enum: STATUS_LIST,
      default: 'pending',
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
