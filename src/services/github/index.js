const axios = require("axios");

const url = `https://api.github.com/users/`

exports.request = async () => {
  const paramRepo = 'takenet/'
  const paramOrder ='repos?sort=created&direction=asc&per_page=6'

  const response = await axios.get(url + paramRepo + paramOrder)

  const resultFilterRepo = response.data.filter(repo => repo.language === 'C#');

  const resultFinal = new Array();
  resultFilterRepo.forEach((repo) => {
    resultFinal.push({
      img: repo.owner.avatar_url,
      name: repo.name,
      desc: repo.description,
      lang: repo.language,
      date_create: repo.created_at
    });
  });

  return resultFinal;
}
