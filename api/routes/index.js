const testsRoutes = require('./tests_routes');

module.exports = function(app, db) {
  testsRoutes(app, db);
  // Other route groups could go here, in the future
};