Meteor.publish('wallets', function() {
	if (this.userId) {
		return Wallets.find({
      createdBy: this.userId
    })
	}

	return this.ready();
});

Meteor.publish('wallets.transactions', function(_id) {
	if (this.userId) {
		const wallet = Wallets.findOne(_id);

		if (wallet) {
			return Transactions.find({
				createdBy: this.userId,
				walletId: _id
			})
		}
	}

	return this.ready();
});
