export const View = props => {
  CHECK_PROPS(props, propTypes, 'Header')
  // const { menu, hash, url } = props

  return div({ class: 'Header' }, [
    div({ class: 'Container' }, [LanguageSwitch({ ...props, sep: '/', showActive: true })]),
  ])
}

export const actions = {
  toggle: state => {
    return {
      ...state,
      menuVisible: !state.menuVisible,
    }
  },
}

export const style = vars => ({
  position: 'fixed',
  backgroundColor: vars.background.light,

  '.Container': {
    display: 'inline-block',
  },

  li: {
    float: 'left',
    margin: '0 0.2em',
  },
})

export const propTypes = {
  Header: [
    { key: 'languages', type: 'array' },
    // { key: 'url', type: 'string' },
    // { key: 'menu', type: 'array' },
  ],
}
