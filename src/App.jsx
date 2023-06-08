import { GlobalStyle } from "../globalStyles"
import { Container, Card, TopCard, BottomCard, Location, Temperature, Celsius, Description, AirFlow, Rain, Refresh } from "./styles/style"
import { BsFillCloudRainFill, BsWind} from "react-icons/bs"

function App() {

  return (
    <>
    <GlobalStyle />
      <Container>
        <Card>
          <TopCard>
            <Location>
              台中市
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
              <BsFillCloudRainFill/>66%</Rain>
            <Refresh>上午12:00</Refresh>
          </BottomCard>
        </Card>
      </Container>
    </>
  )
}

export default App
