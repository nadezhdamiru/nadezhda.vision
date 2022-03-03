export const View = props => {
  CHECK_PROPS(props, propTypes, 'Header')
  // const { menu, hash, url } = props

  return div({ class: 'Header' }, [
    div({ class: 'Container' }, [
      LanguageSwitch({ ...props, sep: '/', showActive: true }),
    ]),
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
  '.Container': {
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '0 2vw 0 0',
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
