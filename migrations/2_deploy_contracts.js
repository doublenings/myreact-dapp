// eslint-disable-next-line no-undef
const StorageIpfs = artifacts.require("StorageIpfs");

module.exports = function(deployer) {
  deployer.deploy(StorageIpfs);
};
