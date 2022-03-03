export const View = (props, children) => {
  const { author } = props

  return div({ class: 'Quote' }, [children, p({ class: 'Author' }, i(` - ${author}`))])
}

export const style = {
  display: 'inline-block',

  '.Author': {
    textAlign: 'right',
    fontSize: '0.8em',
  },
}
