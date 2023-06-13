import { GlobalStyle } from "../../globalStyles"
import { ThemeProvider } from "styled-components";
import { StyleLoading } from "../styles/style"

function ThemeContainer({children, currentTheme}) {
  return (
    <ThemeProvider theme={currentTheme}>
      <StyleLoading>
        <div>{children}</div>
      </StyleLoading>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default ThemeContainer