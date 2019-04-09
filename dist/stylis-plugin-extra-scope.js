'use strict';

function extraScopePlugin(extra) {
  var scope = extra.trim() + " ";
  return function (context, content, selectors, parents, line, column, length, type) {
    if (context !== 2 || type === 107) return;

    for (var i = 0; i < selectors.length; i++) {
      // https://github.com/Andarist/stylis-plugin-extra-scope/issues/2
      // block multiple applications of scope
      if (!selectors[i].includes(scope)) {
        selectors[i] = "" + scope + selectors[i];
      }
    }
  };
}

module.exports = extraScopePlugin;
