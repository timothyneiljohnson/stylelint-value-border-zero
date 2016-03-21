const assign = require('object-assign');
const stylelint = require('stylelint');
const ruleName = 'value-border-zero';
const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: (convention, opposite) =>
    `'border: ${convention}' is preferred over 'border: ${opposite}'`
});
const arrayContains = (searchItem, array) => {
  return (array.indexOf(searchItem) > -1);
};

module.exports = stylelint.createPlugin(ruleName, (options) =>
  (root, result) => {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {
      actual: options,
      possible: {
        convention: ['0', 'none']
      },
    });
    const opposite = options.convention === '0' ? 'none' : '0';
    const checkForBorderMistake = (decl) => {
      const property = decl.prop;
      const value = decl.value;

      if (
        // Check for disallowed value
        value === opposite &&
        // Check if prop is a border prop
        (property === 'border' ||
        property === 'border-top' ||
        property === 'border-right' ||
        property === 'border-bottom' ||
        property === 'border-left')) {
        stylelint.utils.report({
          ruleName: ruleName,
          result: result,
          node: decl,
          message: messages.rejected(options.convention, opposite)
        });
      }
    };

    if (!validOptions) {
      return;
    }

    root.walkDecls(checkForBorderMistake);
  }
);

module.exports.ruleName = ruleName;
module.exports.messages = messages;
