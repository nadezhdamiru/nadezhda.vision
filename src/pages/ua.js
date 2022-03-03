export const state = {
  name: 'Надежда Миру',
  subTitle: 'Видіння',
  description: 'This is the description.',

  instagram: 'Share me and spread the message.',
  arm: 'Position me and raise a monument.',
}

export const View = props =>
  PageWrapper({ ...props, language: 'ua' }, [
    p(
      b([
        'Ukrainian Manifest text',
        'The first few paragraphs',
        'are bold.',
        'Ukrainian Manifest text, rest of text some longer lines to test how the wrapping works and how it all looks with content.',
      ]),
    ),

    p([
      'Ukrainian Manifest text, rest of text some longer lines to test how the wrapping works and how it all looks with content.',
      'Ukrainian Manifest text, rest of text some longer lines to test how the wrapping works and how it all looks with content.',
      'Ukrainian Manifest text, rest of text some longer lines to test how the wrapping works and how it all looks with content.',
    ]),

    p(
      'Ukrainian Manifest text, rest of text some longer lines to test how the wrapping works and how it all looks with content.',
    ),
    p(
      'Ukrainian Manifest text, rest of text some longer lines to test how the wrapping works and how it all looks with content.',
    ),
    p(
      'Ukrainian Manifest text, rest of text some longer lines to test how the wrapping works and how it all looks with content.',
    ),
  ])
