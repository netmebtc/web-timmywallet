const axios = require('axios');

const {
  RPC_USER,
  RPC_PASS,
  RPC_URL
} = process.env;

export class Rpc {
  constructor(options) {
    let opt = {
      jsonrpc: "2.0",
      bindAddress: '0.0.0.0:8070',

      // send money anonymity
      anonymity: 6,
      optimization: "minimal",
      defaultFee: 1000000
    };

    if (RPC_USER && RPC_PASS) {
      opt.auth = {
        username: RPC_USER,
        password: RPC_PASS
      }
    }

    // set
    this.options = _.defaults(options, opt);

    // console.log(this.options);

    // axios fetch instance
    this.instance = axios.create({
      baseURL: this.options.bindAddress,
      headers: { 'content-type': 'application/json-rpc' },
      auth: this.options.auth
    });
  }

  jsonrpc(method, params={}) {
    return {
      id: 0,
      jsonrpc: this.options.jsonrpc,
      method,
      params
    }
  }

  post(method, params) {
    return this.instance.post('json_rpc', this.jsonrpc(method, params))
  }

  getStatus() {
    return this.post('getStatus')
  }

  createAddresses(params) {
    return this.post('createAddress', params)
  }

  getBalance(address) {
    return this.post('getBalance', {
      address
    });
  }

  getTransaction(hash) {
    return this.post('getTransaction', {
      transactionHash: hash
    });
  }

  getTransactions(blockCount) {
    return this.post('getTransactions', {
      firstBlockIndex: 1,
      blockCount
    });
  }

  deleteAddress(address) {
    return this.post('deleteAddress', {
      address
    });
  }

  sendTransaction(from, to, amount) {
    return this.post('sendTransaction', {
      anonymity: this.options.anonymity,
      fee: this.options.defaultFee,

      // paymentId eklenmelidir.

      // Bu adresten
      changeAddress: from,

      // Aşşağıdaki adreslere ammount kadar gönder.
      transfers: [
        { amount, address: to }
      ]
    });
  }
}

Timmycoin = new Rpc({
  bindAddress: RPC_URL
});

/*
Timmycoin.sendTransaction('2WGJ17mKZ6nToERzyhEV1XQ477eEbQKizECq1iVLxqFEQXhZV7iViDUV35jDvAumEs2RzSKZzfvKSfcUVLFHkRxk8WNGZwX',
'2UJAz1V6kAV9mJwKW2EjW3SzEUT2eED8u6XC2yoZBi9XGfjwqBEK8eAV35jDvAumEs2RzSKZzfvKSfcUVLFHkRxk8VGaGzN', 5000000000).then((data) => {
  console.log(data);
})
*/
