const github = require('../../services/github');

exports.getAll = async (req, res) => {
  const serviceResponse = await github.request();
  res.status(200).json(serviceResponse)
}
