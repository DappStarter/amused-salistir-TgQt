require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rifle mad minor inflict person frame gather'; 
let testAccounts = [
"0xc35b65c193be1c32861fa8519bf9ca37300f1077511c6334b80e6391e0b5fbb3",
"0x4f43812db9c6b8e61a248ad0b43a37cb9c85400700acf4f8519af16a97fb9dae",
"0x3595560f634c4194ef1f6cc70952220ef92702fb32adcd216e4d3c34f95f5be2",
"0x920fc4630e75c347dd88122b1a5379148741d2aa5dc72c086c5e9e0fbd292301",
"0xd2720e26d10c24358752cbfa28f45d7285d781036874a11e2809a849fa1c6c48",
"0x5beb8647e9c84cd63166fe524082f70688140e0790b9b71106617fad109e299c",
"0x62039489c47e92837c6c85df148c87d2362879d126bc02d72340a954d938d1b7",
"0x8fd32f917597d7275b491e2b9eb23c2db73a54ac12f9cdfdad8440bd48f55266",
"0x126d2fb13bac23500c5a191f41fa32095a47ca18981dd3dc3dc0b5ccfb755763",
"0xf8605118adbdb5459dd1b911cffbb71af912e1eedb686f9d1e404313e0f6d86a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


