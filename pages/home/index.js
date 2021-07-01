import { ThemeProvider } from "styled-components"

import { CustomTheme, GlobalStyles } from '../../src/utils/ThemeConfig'
import Head from '../../src/components/Head'
import Header from '../../src/components/Header'
import Grid from '../../src/components/Grid'

export default function Home() {
  return (
    <>
      <Head />
      <ThemeProvider theme={CustomTheme}>
        <GlobalStyles />
        <Header />
        <Grid />
      </ThemeProvider>
    </>
  )
}
