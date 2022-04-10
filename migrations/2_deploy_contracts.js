const YouMatterDao = artifacts.require("YouMatter");


module.exports = function(deployer) {
  deployer.deploy(YouMatterDao, [], []);
  
};
