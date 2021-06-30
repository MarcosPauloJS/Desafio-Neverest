import Head from '../../src/components/Head'
import { ThemeProvider } from "styled-components"
import { CustomTheme, GlobalStyles } from '../../src/utils/ThemeConfig'

export default function Home() {
  return (
    <>
      <Head />
    <ThemeProvider theme={CustomTheme}>
      <GlobalStyles />
      <h1>adm</h1>
    </ThemeProvider>
    </>
  )
}