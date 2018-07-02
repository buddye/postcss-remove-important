var postcss = require('postcss');
module.exports = postcss.plugin('@buddye/postcss-remove-important"', function() {
  return function(root) {
    root.walkRules(function(rule) {
      rule.walkDecls(function(decl) {
        decl.important = false;
      });
    });
  };
});
