const { ethers } = require("hardhat")
const cryptoEmJSON = require("../artifacts/contracts/CryptoEm.sol/CryptoEm.json")
async function main() {
 const abi = cryptoEmJSON.abi
 const provider = new ethers.providers.InfuraProvider("rinkeby", process.env.RINKEBY_PROJECT_ID)
 const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
 const signer = wallet.connect(provider)
 const cryptoEm = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer)
 await cryptoEm.mint("https://ipfs.io/ipfs/QmcqpB1CaUQdwHnFMjyKZU8obkGM4XnhkcLfsVirsvB9k1")
 console.log("NFT minted successfully")
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
