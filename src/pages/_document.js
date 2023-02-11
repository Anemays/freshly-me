// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../components/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <head dangerouslySetInnerHTML={{ __html: '\n<!--\n\tNama: Raka Bintang Pratama\n\tNIM: 10122301\n\tKelas: IF-8\n-->' }}>
        </head>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
