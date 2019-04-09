export default function extraScopePlugin(extra) {
  const scope = `${extra.trim()} `

  return (context, content, selectors, parents, line, column, length, type) => {
    if (context !== 2 || type === 107) return

    for (let i = 0; i < selectors.length; i++) {
      // https://github.com/Andarist/stylis-plugin-extra-scope/issues/2
      // block multiple applications of scope
      if (!selectors[i].includes(scope)) {
        selectors[i] = `${scope}${selectors[i]}`
      }
    }
  }
}
