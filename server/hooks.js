Wallets.after.insert(function(userId, doc) {
  Ekipcoin.createAddresses().then(({ data: { result } }) => {
    return Wallets.update(doc._id, {
      $set: {
        address: result.address
      }
    })
  })
});

Wallets.after.remove(function(userId, doc) {
  Ekipcoin.deleteAddress(doc.address).then(({ data }) => {
    console.log(data);
  })
});
