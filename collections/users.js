Users = Meteor.users;

Users.helpers({
  email() {
    return _.first(this.emails).address;
  },

  wallets() {
    return Wallets.find({
      createdBy: this._id
    })
  }
})
