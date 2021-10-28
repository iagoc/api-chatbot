const axios = require("axios");

const url = 'https://api.github.com/search/repositories?q=org:takenet+language:c%23'
// const options = {
//     method: 'GET',
//     headers: {
//         "Content-Type": "application/json",
//     }
// }

exports.request = async (method = 'get') => {
  const response = await axios.get(url)

  response.data.items.forEach((item, key) => {
    console.log(key)
    console.log(item.description)
  })

  return response.data
}
