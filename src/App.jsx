import { GlobalStyle } from "../globalStyles"
import { Container, Card, TopCard, BottomCard, Location, Temperature, Celsius, Description, AirFlow, Rain, Refresh, ThemeIcon } from "./styles/style"
import { ThemeProvider } from "styled-components"
import { lightTheme,darkTheme } from "../globalStyles"
import { BsFillCloudRainFill, BsWind} from "react-icons/bs"
import {CiLight, CiDark} from "react-icons/ci"
import { AiOutlineReload } from "react-icons/ai"
import { ReactComponent as Day} from "./assets/sun.svg"

import { useState } from "react"

function App() {
  const [theme, setTheme] = useState('light')
  const changeTheme = () => {
    setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light")
  }

  return (
    <>
    <ThemeProvider theme={ theme === "light" ? darkTheme : lightTheme}>
      <GlobalStyle />
        <Container>
          <Card>
            <TopCard>
              <Location>
                臺中市
              </Location>
              <Temperature>
                30<Celsius>°C</Celsius>
              </Temperature>
            </TopCard>
            <BottomCard>
                <Description>
                  多雲時晴
                </Description>
                <AirFlow>
                  <BsWind/>10m/h
                </AirFlow>
                <Rain>
                  <BsFillCloudRainFill/>66%
                </Rain>
                <Day className="day-icon"/>
              <Refresh>
                下午12:00 <AiOutlineReload />
              </Refresh>
            </BottomCard>
            <ThemeIcon onClick={changeTheme}>
              {theme === "light" && <CiLight/>}
              {theme === "dark" && <CiDark/> }
            </ThemeIcon>
          </Card>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
