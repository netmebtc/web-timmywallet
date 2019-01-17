# Wallet

> Timmycoin (TMY) Wallet

Production: [wallet.timmycoin.net](https://wallet.timmycoin.net)

#### Start Development

##### Meteor install

    curl https://install.meteor.com/ | sh
    
##### Clone and start

    git clone https://github.com/tmycoin/web-timmywallet.git
    cd web-timmywallet
    meteor npm install
    
##### Set RPC AUTH

    export RPC_USER=user
    export RPC_PASS=pass
    export RPC_URL=http://localhost:8070
    
##### Start Wallet

    meteor run
