const hre = require("hardhat");
async function main() {

 // Token Deployment
 const FundBlock = await ethers.deployContract("FundBlock");
 await FundBlock.waitForDeployment();
 console.log(`FundBlock  deployed to ${FundBlock.target}`);

}
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  





