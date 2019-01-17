Template.dashboard.helpers({
  height() {
    const { height } = Template.instance();
    return height.get();
  },

  wallet() {
    const { _id } = Router.current().params;
    return Wallets.findOne(_id);
  }
});

Template.wallets.helpers({
  wallets() {
    return Wallets.find({ })
  }
});

Template.transactions.helpers({
  transactions() {
    return ReactiveMethod.call("getTransactions", this.walletId);
  }
});


Template.walletItem.helpers({
  getBalance() {
    return ReactiveMethod.call("getBalance", this._id);
  }
});
