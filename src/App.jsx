import { GlobalStyle } from "../globalStyles"
import { Container, Card, TopCard, BottomCard, Location, Temperature, Celsius, Description, AirFlow, Rain, Refresh } from "./styles/style"
import { BsFillCloudRainFill, BsWind} from "react-icons/bs"
import { AiOutlineReload } from "react-icons/ai"
import { ReactComponent as Day} from "./assets/sun.svg"

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
                <BsFillCloudRainFill/>66%
              </Rain>
              <Day className="day-icon"/>
            <Refresh>
              上午12:00 <AiOutlineReload />
            </Refresh>
          </BottomCard>
        </Card>
      </Container>
    </>
  )
}

export default App
