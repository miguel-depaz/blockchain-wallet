let MoolahCoin = artifacts.require("MoolahCoin.sol");

module.exports = function (deployer) {
  deployer.deploy(MoolahCoin);
};
