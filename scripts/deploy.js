const { ethers } = require("hardhat")

async function main() {
  const CryptoEm = await ethers.getContractFactory("CryptoEm")
  const cryptoEm = await CryptoEm.deploy("CrytpoEm", "CBEET")

  try {
    await cryptoEm.deployed()
    console.log(`contract successfully deployed to ${cryptoEm.address}`)
    
  } catch(err) {
    console.log(`Error: ${err.message}`)
  }

  
    try {
      const newItemId = await cryptoEm.mint("https://ipfs.io/ipfs/QmewVE6QCUbtokWBwddQswSzgqjjZQj2k4U2kbjAkbNWXQ")
      console.log(`NFT minted successfully :: ${newItemId}`)
    } catch(err) {
      console.log(`Minting error: ${err.message}`)
    }
  

}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
