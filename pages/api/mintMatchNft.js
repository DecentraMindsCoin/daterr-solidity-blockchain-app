import { DATERR_ADDRESS, DATERR_ABI } from '../../lib/constants'
import Moralis from 'moralis/node'
import { ethers } from 'ethers'
// setup moralis in mintNFT function
const mintMatchNft = async (req, res) => {
  await Moralis.start({
    serverUrl: process.env.MORALIS_SERVER_URL,
    appId: process.env.MORALIS_APP_ID,
    masterKey: process.env.MORALIS_MASTER_KEY,
  })
// create metadata to store all data that will include in NFT. Always have name, description, and message == (match)
  const metadata = {
    name: `${req.body.names[0]} & ${req.body.names[1]}`,
    description: `${req.body.names[0].split(' ')[0]} & ${
      req.body.names[1].split(' ')[0]
    } just matched!`,
    image: `ipfs://QmY4tKpDGzVHzaSkQc5gzVMCMNoznZqaX15DXkyL2bPp8Z`,
  }
// to binary takes metadata turn into string, makes buffer, then encodes it to base64 string
  const toBtoa = Buffer.from(JSON.stringify(metadata)).toString('base64')
  // use noralis to save file as variable
  const metadataFile = new Moralis.File('file.json', { base64: toBtoa })
// save metadata into ifps, since backend needs Moralis "masterkey"
  await metadataFile.saveIPFS({ useMasterKey: true })
// now we have metadata URI set equal to metadata file.ipfs() 
  const metadataURI = metadataFile.ipfs()
// setup provider to work on rinkebvy test net, uses alchemy to talk to Blockchain
  const provider = ethers.getDefaultProvider(process.env.ALCHEMY_API_URL, {
    chainId: 4,
    name: 'rinkeby',
  })
// App we have has gasless transaction be any time transaction goes through it is paid for by owner or First Wallet setup == private key
// users dont have to pay for gas fees.
  const walletWithProvider = new ethers.Wallet(
    process.env.WALLET_PRIVATE_KEY,
    provider,
  )
// Get contract and pass in contract data Addres, ABI, wallet to pay all gas
  const contract = new ethers.Contract(
    DATERR_ADDRESS,
    DATERR_ABI,
    walletWithProvider,
  )
// Invoking Daterr Smart Contract created and runnning mintNFt function with 3 parameters. User1, user2, metadataURI == userData 
  const tx = await contract.mintNFT(
    req.body.walletAddresses[0],
    req.body.walletAddresses[1],
    metadataURI,
  )
// wait in web2 waiting for wait in web3.
  const txReceipt = await tx.wait()
  console.log(txReceipt)
// if all is successful send res(200)
  res.status(200).send({
    message: 'success',
    data: { tx: tx, txReceipt: txReceipt },
  })
}

export default mintMatchNft