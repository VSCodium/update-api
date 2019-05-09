const { parse } = require('url')

module.exports = (req, res) => {
  const parsed = parse(req.url, true)
  res.end(JSON.stringify(parsed, null, 2))
}
