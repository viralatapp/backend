const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const PAYMENT_METHODS = ['CreditCard', 'Paypal'];

const sponsorshipSchema = mongoose.Schema(
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
    validUntil: {
      type: Date,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: PAYMENT_METHODS,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
sponsorshipSchema.plugin(toJSON);
sponsorshipSchema.plugin(paginate);

/**
 * @typedef Sponsorship
 */
const Sponsorship = mongoose.model('Sponsorship', sponsorshipSchema);

module.exports = Sponsorship;
