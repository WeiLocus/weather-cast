import { GlobalStyle } from "../../globalStyles"
import { ThemeProvider } from "styled-components";
import { StyleLoading } from "../styles/style"

function ThemeContainer({children, currentTheme}) {
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <StyleLoading>
        <div>{children}</div>
      </StyleLoading>
    </ThemeProvider>
  )
}

export default ThemeContainer