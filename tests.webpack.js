var context = require.context('./build', true, /.+\.js$/);
context.keys().forEach(context);
module.exports = context;
