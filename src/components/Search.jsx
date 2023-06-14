import { SearchLocation, Input } from "../styles/style";
import { availableLocations } from "../utils/helpers";
import { BiSearchAlt } from "react-icons/bi";

function Search({selectCity, onChange, onClick,  isOpen, isFetching, isForecastDataFetching}) {
  return (
    <SearchLocation>
      <BiSearchAlt className="search" onClick={onClick}/>
      {(isOpen && !isFetching && !isForecastDataFetching) &&   
      <div className="wrapper">
        <Input
          type="select"
          placeholder="Enter your location"
          // defaultValue="臺中市"
          value={selectCity}
          onChange={onChange}
          >
          {availableLocations.map(({ cityName }) => (
            <option className="location-name" value={cityName} key={cityName}>
              {cityName}
            </option>
          ))}
        </Input>
      </div>
      }
    </SearchLocation> 
  )
}

export default Search