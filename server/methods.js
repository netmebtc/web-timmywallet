import Future from 'fibers/future';

Meteor.methods({
  getBalance(_id) {
    const wallet = Wallets.findOne({
      _id,
      createdBy: this.userId
    });

    if (wallet) {
      const future = new Future();

      Ekipcoin.getBalance(wallet.address).then(({ data: { result } }) => {
        future.return(result)
      })

      return future.wait();
    }
  },

  getTransactions(_id) {
    const wallet = Wallets.findOne({
      _id,
      createdBy: this.userId
    });

    if (wallet) {
      const future = new Future();

      Ekipcoin.getStatus().then(({ data: { result } }) => {
        const { blockCount } = result;

        Ekipcoin.getTransactions(blockCount).then(({ data: { result: { items } } }) => {
          let out = [];

          items.forEach(({ blockHash, transactions }) => {
            transactions.forEach((transaction) => {
              transaction.transfers.forEach((transfer) => {
                out.push({
                  transfer,
                  timestamp: transaction.timestamp,
                  transaction: _.omit(transaction, 'transfers')
                });
              })
            })
          })

          const transfers = out.filter((t) => {
            return _.isEqual(t.transfer.address, wallet.address);
          })

          future.return(_.sortBy(transfers, (t) => -t.timestamp))
        })
      })

      return future.wait();
    }
  }
})
