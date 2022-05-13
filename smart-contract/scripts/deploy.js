const { ethers } = require('hardhat')

const main = async () => {
  // get smart contract with the name we created D8rrERC721
  const daterrFactory = await ethers.getContractFactory('DaterrERC721')

  // after getting contract, take contract and deploy it, when deployed it will be stored in D8rrContract variable.
  const DaterrContract = await daterrFactory.deploy()
  // address where contract lives on blockchain
  console.log('Daterr CONTRACT ADDRESS: ', DaterrContract.address)
}
// run main function, if request is successful then we will exit, if not we will catch the error.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error('Error in deploying contract >> ', error)
    process.exit(1)
  })
