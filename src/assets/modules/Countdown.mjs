export const View = (props, children) => {
  const { until = 'January 01, 2030 00:00:00 UTC', title } = props
  let { dayString = 'DAY' } = props

  const waitFor = new Date(until).getTime()
  const now = new Date().getTime()
  let { d, h, m, s } = helpers.dhm(until)

  if (h < 10) {
    h = `0${h}`
  }
  if (m < 10) {
    m = `0${m}`
  }
  if (s < 10) {
    s = `0${s}`
  }

  if (d > 1) {
    dayString += 'S'
  }

  return div({ class: 'Countdown' }, [
    div({ class: 'Placeholder' }, [
      div({ class: 'Background' }, [
        title && h2(title),
        waitFor <= now && children,

        d > 0 && p({ class: 'Day' }, `${d} DAYS`),
        waitFor > now && p({ class: 'Hour' }, `${h}:${m}:${s}`),
      ]),
    ]),
  ])
}

export const style = vars => ({
  height: '100%',
  width: '100%',

  h2: {
    margin: 0,
    padding: 0,
  },

  '.Placeholder': {
    textAlign: 'center',
    margin: '0 auto',
  },

  '.Background': {
    // background: `${vars.background.dark}80`,
    // borderRadius: '1em',
    // textAlign: 'center',
    padding: '0.5em',
    // display: 'inline-block',
  },

  '.Day, .Hour': {
    fontSize: '2em',
    fontWeight: 'bold',
    // color: vars.replayColor,
    whiteSpace: 'nowrap',
    display: 'inline',
  },

  '.Day': {
    margin: '0 2% 0 0',
  },
})

export const helpers = {
  dhm: to => {
    const now = new Date().getTime()

    if (to instanceof Date) {
      to = to.getTime()
    } else if (typeof to === 'string') {
      to = new Date(to).getTime()
    }

    const ms = to - now

    const msInSecond = 1000
    const msInMinute = 60 * msInSecond
    const msInHour = 60 * msInMinute
    const msInDay = 24 * msInHour

    const d = Math.floor(ms / msInDay)

    const dayMod = ms % msInDay
    const h = Math.floor(dayMod / msInHour)

    const hourMod = ms % msInHour
    const m = Math.floor(hourMod / msInMinute)

    const minuteMod = ms % msInMinute
    const s = Math.floor(minuteMod / msInSecond)

    return {
      d,
      h,
      m,
      s,
      ms,
    }
  },

  subscribe: (dispatch, action) => {
    setInterval(() => {
      dispatch(action, { arg: Math.random() * 100 })
    }, 1000)
  },
}

export const actions = {
  onSubscription: (state, e) => ({
    ...state,
    arg: e.arg,
  }),
}

export const subscriptions = [['helpers.subscribe', 'actions.onSubscription']]

export const global = {
  actions: {
    onSubscription: true,
  },
}
