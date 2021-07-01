import { ThemeProvider } from "styled-components"

import { CustomTheme, GlobalStyles } from '../../src/utils/ThemeConfig'
import Head from '../../src/components/Head'
import Header from '../../src/components/Header'

export default function adm() {
  return (
    <>
      <Head />
      <ThemeProvider theme={CustomTheme}>
        <GlobalStyles />
        <Header />
      </ThemeProvider>
    </>
  )
}