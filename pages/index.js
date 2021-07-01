import { ThemeProvider } from "styled-components"

import { CustomTheme, GlobalStyles } from '../src/utils/ThemeConfig'
import Head from '../src/components/Head'
import Enter from '../src/components/Enter'

export default function Home() {
  return (
    <>
      <Head />
      <ThemeProvider theme={CustomTheme}>
        <GlobalStyles />
        <Enter/>
      </ThemeProvider>
    </>
  )
}