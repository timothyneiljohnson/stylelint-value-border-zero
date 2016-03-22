const ruleTester = require('stylelint-rule-tester');
const valueBorderZero = require('..');

const messages = valueBorderZero.messages;
const testRule = ruleTester(valueBorderZero.rule, valueBorderZero.ruleName);

const basics = (tr) => {
  tr.ok('');
  tr.ok('a {}');
  tr.ok('@import \'foo.css\';');
};

testRule({ convention: '0' }, (tr) => {
  basics(tr);

  tr.ok('a { border: 0; }');
  tr.notOk('a { border: none; }', '\'border: 0\' is preferred over \'border: none\'. (value-border-zero)');

  tr.ok('@media print { a { border: 0; }}');
  tr.notOk('@media print { a { border: none; }}', '\'border: 0\' is preferred over \'border: none\' (value-border-zero)');
});

testRule({ convention: 'none' }, (tr) => {
  basics(tr);

  tr.ok('a { border: none; }');
  tr.notOk('a { border: 0; }', '\'border: none\' is preferred over \'border: 0\' (value-border-zero)');

  tr.ok('@media print { a { border: none; }}');
  tr.notOk('@media print { a { border: 0; }}', '\'border: none\' is preferred over \'border: 0\' (value-border-zero)');
});
