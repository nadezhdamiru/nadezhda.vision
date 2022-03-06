export const View = (props, children) =>
  div({ class: 'PageWrapper' }, [
    div({ id: 'hero' }, [
      Picture({
        class: 'profile',
        name: '/profile_nadia',
        extension: 'jpg',
        width: 400,
        height: 400,
        alt: '',
        role: 'presentation',
      }),

      div({ class: 'title' }, [h1(props.name), h2(props.subTitle)]),
    ]),

    section({ id: 'manifest' }, children),

    Picture({
      class: 'full',
      name: '/full_nadia',
      extension: 'jpg',
      width: 1920,
      height: 1080,
      alt: '',
      role: 'presentation',
    }),

    Countdown({
      until: 'March 6, 2022 10:00:00',
      title: 'Instagram',
      after: props.instagram,
      url: 'https://www.instagram.com/nadezhda_miru/',
    }),

    Countdown({ until: 'March 10, 2022 16:00:00', title: 'Artificial Museum', after: props.arm }),
  ])
