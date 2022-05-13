import { client } from '../../lib/sanity'
// query for current active account 
const getUserInfo = async (req, res) => {
  try {
    const query = `
      *[_type == "users" && _id == "${req.query.activeAccount}"]{
          name,
          walletAddress,
          "imageUrl": profileImage.asset->url
        }
    `
// wtore what we get back from that query in a response variable
    const sanityResponse = await client.fetch(query)

    res.status(200).send({ message: 'success', data: sanityResponse[0] })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default getUserInfo
