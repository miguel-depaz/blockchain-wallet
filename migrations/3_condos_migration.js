let Condos = artifacts.require("Condos.sol");

module.exports = function (deployer) {
  deployer.deploy(Condos);
};
