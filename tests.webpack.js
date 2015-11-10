require('./src/app.ts');
var context = require.context('./src', true, /.+\.test\.ts$/);
context.keys().forEach(context);
module.exports = context;
