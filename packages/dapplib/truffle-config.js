require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stool razor spice column hunt ghost army gaze'; 
let testAccounts = [
"0x4c8303fefbd5a0688f4ec7c55a9fcb26e57fe55af658f92b8d95127c2896fd2b",
"0x3eece281498343f0ee34e0d47cb6c78fe6061e7a218310c59261472ef4c44a4e",
"0x9053f08ede6262f93be848b34ce9461300b5d0a2f41c6a5534e6ccfa95f2c624",
"0x9ffc4dede883ae4b72b53c16b4b61327c0a03128d86f6ff66e5acda0ffd814ba",
"0x174e6bb3ca4a0daf670e9e1bf4b94aa10a2c7e1e379b65e020687a1891fe47b2",
"0x85530e6e490e9c2eeabcffc85bd281482b86246d046331560bdc07a8b4624657",
"0x3c1dcdd4ba997bc49dbb529c8b4c719d6ecb76658784a60f4e74109c139fadd1",
"0x189307169e7c7698b25536321bb8e53bb7113a30b05187def880ad8028fcee06",
"0x511dce3f3a18bd7f99f378c5e53caeb5d1d8d0a220e36733143911934ce345fa",
"0xcaf628a977a5a6047c6d89f2e37815a484331b8d33c96de2e1292a254fe3460b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

