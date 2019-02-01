const path = require('path');

module.exports = (app) => {

  app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'./../index.html'));
  });

  app.get('*', function(req, res, next) {
    res.status(404).send('Route not found ');
  });
}
