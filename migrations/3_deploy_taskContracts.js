// eslint-disable-next-line no-undef
const Comments = artifacts.require("Comments");

module.exports = function(deployer) {
  deployer.deploy(Comments);
};