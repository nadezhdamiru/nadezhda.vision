export const state = {
  name: 'Nadezhda Miru',
  description: 'When injustice becomes law, resistance becomes a duty!',
  subTitle: 'Vision',

  instagram: 'Share my page and spread the message.',
  arm: 'Position my Statue and raise a monument.',
}

export const View = props =>
  PageWrapper({ ...props, language: 'en' }, [
    p({ class: 'Statement' }, b('When injustice becomes law, resistance becomes a duty!')),

    div({ class: 'Story' }, [
      p([
        'Nadezhda is 3 metres high and weighs 100 tons.',
        ' Nadezhda is still a child and must be an adult for you now!',
        ' Nadezhda is a native giantess and perhaps the last of her kind!',
        ' Her fate is not an easy one, but she accepts it, she has come to stay,',
        ' because as the last of her kind, she will live forever!',
      ]),

      p(
        'She sits there in defiance of hate, violence, war and oppression, raising the shield of hope.',
      ),
    ]),

    Quote({ author: 'John Lennon & Yoko Ono, 1971' }, [
      p([
        i("Imagine there's no countries"),
        i("It isn't hard to do"),
        i('Nothing to kill or die for'),
        i('And no religion, too'),
        i('Imagine all the people'),
        i("Livin' life in peace"),
      ]),
      p([
        i("You may say I'm a dreamer"),
        i("But I'm not the only one"),
        i("I hope someday you'll join us"),
        i('And the world will be as one'),
      ]),
      p([
        i('Imagine no possessions'),
        i('I wonder if you can'),
        i('No need for greed or hunger'),
        i('A brotherhood of man'),
        i('Imagine all the people'),
        i('Sharing all the world'),
      ]),
      p([
        i("You may say I'm a dreamer"),
        i("But I'm not the only one"),
        i("I hope someday you'll join us"),
        i('And the world will live as one”'),
      ]),
    ]),
  ])
