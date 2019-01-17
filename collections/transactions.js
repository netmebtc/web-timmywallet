import { Mongo } from 'meteor/mongo';

Transactions = new Mongo.Collection('transactions');

// timestampable
Transactions.attachBehaviour('timestampable');

// SimpleSchema
Transactions.attachSchema(new SimpleSchema({
  walletId: {
    type: String
  },

  hash: {
    type: String,
    optional: true
  }
}));
