import { Mongo } from 'meteor/mongo';

Wallets = new Mongo.Collection('wallets');

// timestampable
Wallets.attachBehaviour('timestampable');

// SimpleSchema
Wallets.attachSchema(new SimpleSchema({
  name: {
    type: String
  },

  address: {
    type: String,
    optional: true
  }
}));
