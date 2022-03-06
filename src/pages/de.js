export const state = {
  name: 'Nadjeshda Miru',
  subTitle: 'Vision',
  description: 'Wenn Unrecht zu Recht wird, wird Widerstand zur Pflicht!',

  instagram: 'Teile meine Seite und verbreite die Botschaft.',
  arm: 'Positioniere meine Statue und setze ein Denkmal.',
}

export const View = props =>
  PageWrapper({ ...props, language: 'de' }, [
    p({ class: 'Statement' }, b(props.description)),

    div({ class: 'Story' }, [
      p([
        'Nadezhda ist 3 Meter hoch und 100 Tonnen schwer.',
        ' Nadezhda ist noch ein Kind und muss jetzt für euch Erwachsen sein!',
        ' Nadezhda ist gebürtige Riesin und vielleicht letzte ihrer Art!',
        ' Ihr Schicksal ist kein leichtes, doch Sie nimmt es hin, Sie ist gekommen, um zu bleiben,',
        ' denn als letzte Ihrer Art wird sie ewig leben!',
      ]),

      p([
        ' Sie sitzt da dem Hass, der Gewalt, dem Krieg, der Unterdrückung zum Trotz,',
        ' und hält es hoch, das Schild der Hoffnung.',
      ]),
    ]),

    Quote({ author: 'Georgij Melnikov, 2022' }, [
      i('„Nadezhda ist mit uns, im Falle der Fälle.'),
      i('Eure Gewalt, kann Sie uns nicht nehmen!'),
      i('Sie wird nicht verschwinden, passt in keine Zelle.'),
      i('Ihr könnt Sie nicht brechen, verbrennen, begraben,'),
      i('verschieben, verbiegen und sprengen geht nicht.'),
      i('Ihr könnt auf Sie schießen, ihr wird nichts passieren.'),
      i('Sie wird immer bleiben für dich und für mich.“'),
    ]),
  ])
