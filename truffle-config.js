const {TruffleProvider } = require('@harmony-js/core' )



module, exports = {

networks: {
  testnet:{
    network_id: '2',
    provider: () => {
      const truffleProvider = new TruffleProvider(
        'https: //api.s0.b.hmny.io',
        { memonid: "entry lonely vault cute select scatter artwork glow bone return fuel method"},
        { shardID: 0, chainId: 2 },
        { gasLimit: 6721900, gasPrice: 1000000000},
        );
        const newAcc = truffleProvider.addByPrivateKey('01b3b3c4a853d48d46a6222a59394bd6bcf0bd53e6ef2fa18a2ee39af903f809');
        truffleProvider.setSigner(newAcc);
        return truffleProvider;
      }
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
};

