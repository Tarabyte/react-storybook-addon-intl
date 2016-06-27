// Add support for all files in the src directory ending with -spec.js
const context = require.context('../src', true, /-spec\.js$/);

context.keys().forEach(key => {
  context(key);
});

// bootstrap chai
require('chai').should();
