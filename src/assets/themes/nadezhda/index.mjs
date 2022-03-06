export const vars = {
  text: {
    dark: '#fafafa',
    light: '#0c0c0c',
  },

  background: {
    dark: '#0c0c0c',
    light: '#fafafa',
  },

  gameoverColor: '#f03f4b',
  replayColor: '#06e3f3',

  neutral: '#0c0c0c',

  paddingLeft: '25px',

  link: {
    dark: '#fafafa',
    light: '#0c0c0c',

    hover: {
      dark: '#fafafa',
      light: '#0c0c0c',
    },
  },

  widths: {
    tablet: '500px',
    laptop: '730px',
    desktop: '940px',
    agency: '1200px',
  },
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    body: {
      fontFamily: `
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Helvetica,
      Ubuntu,
      Arial,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol"
    `,
      fontSize: '16px',
    },

    '#Magic': {
      width: '90%',
      maxWidth: '800px',
      margin: '0 auto',

      '.icon': {
        width: '1em',
      },
    },

    a: {
      color: vars.text.light,

      '&:hover': {
        color: vars.text.light,
      },
    },

    '.LanguageSwitch': {
      top: 0,
      right: 0,
      fontSize: '1em',

      a: {
        color: vars.text.light,

        '&:hover': {
          color: vars.text.light,
        },

        '&.active': {
          textDecoration: 'none',
        },
      },
    },

    'nav.languages': {
      float: 'right',

      ul: {
        display: 'inline-block',
      },
      li: {
        float: 'left',
        margin: '0 0 0 0.3em',
      },
    },

    picture: {
      display: 'inline-block',

      '&.profile': {
        width: '90%',
        height: 'auto',
        margin: '0 0 3em',
      },
      '&.full': {
        margin: '2em 0 0',
      },
    },

    section: {
      clear: 'both',
      display: 'block',
    },

    p: {
      margin: '0 0 1em',
    },

    i: {
      display: 'block',
    },

    '.Page': {
      padding: '3em 0 0',

      h1: {
        fontSize: '2em',
        padding: 0,
      },
      h2: {
        fontSize: '2.5em',
        fontWeight: 'bold',
        padding: 0,
      },
    },

    '.title': {
      margin: '0 0 3em',
    },

    '@media screen and (min-width: 600px)': {
      body: {
        fontSize: '20px',
      },
      '.title': {
        float: 'left',
        maxWidth: '57%',
        margin: 0,
      },

      picture: {
        '&.profile': {
          width: '40%',
          height: 'auto',
          float: 'left',
          margin: '0 2.99% 3em 0',
        },
      },
    },
  }
}
