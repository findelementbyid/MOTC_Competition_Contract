var Subsidy = artifacts.require("./Subsidy.sol");

module.exports = function(deployer) {
  deployer.deploy(Subsidy);
};
