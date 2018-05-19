module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*"
        },
        live: {
            host: "178.25.19.88", // Random IP for example purposes (do not use)
            port: 80,
            network_id: 1,        // Ethereum public network
            // optional config values:
            // gas  Gas limit used for deploys. Default is 4712388
            // gasPrice Gas price used for deploys. Default is 100000000000 (100 Shannon).
            // from - default address to use for any transaction Truffle makes during migrations
            // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
            //          - if specified, host and port are ignored.
        }
    }
};
