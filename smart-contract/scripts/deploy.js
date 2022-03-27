const { ethers } = require("hardhat");

const main = async () => {
  const tinderFactory = await ethers.getContractFactory("TinderERC721");
  const TinderContract = await tinderFactory.deploy();

  console.log("Tinder Contract Address: ", TinderContract.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log("Error in deployment", error);
    process.exit(1);
  });
