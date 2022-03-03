export const state = {
  name: 'Надежда Миру',
  subTitle: 'Видіння',
  description: 'This is the description.',
}

export const View = props => PageWrapper({ ...props, language: 'ua' }, [
    p(b([
      'Ukrainian Manifest text',
      'The first few paragraphs',
      'are bold.',
      'Ukrainian Manifest text, rest of text some longer lines to test how the wrapping works and how it all looks with content.',
    ])),

    p([
      'Ukrainian Manifest text, rest of text some longer lines to test how the wrapping works and how it all looks with content.',
      'Ukrainian Manifest text, rest of text some longer lines to test how the wrapping works and how it all looks with content.',
      'Ukrainian Manifest text, rest of text some longer lines to test how the wrapping works and how it all looks with content.',
    ]),

    p('Ukrainian Manifest text, rest of text some longer lines to test how the wrapping works and how it all looks with content.'),
    p('Ukrainian Manifest text, rest of text some longer lines to test how the wrapping works and how it all looks with content.'),
    p('Ukrainian Manifest text, rest of text some longer lines to test how the wrapping works and how it all looks with content.'),
  ])