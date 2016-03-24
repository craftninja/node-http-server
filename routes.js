var routes = {
  '/special-request': function (req, res) {
    res.end('Such a special request!');
  },
  '/not-special-request': function (req, res) {
    res.end('Boring');
  }
};

module.exports = routes;
