import { SearchLocation, Input } from "../styles/style";
import { availableLocations } from "../utils/helpers";
import { BiSearchAlt } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md"

function Search({selectCity, onChange, onClick}) {
  return (
    <SearchLocation>
      <MdLocationOn className="location"/>
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
      <BiSearchAlt className="search" onClick={onClick}/>
    </SearchLocation> 
  )
}

export default Search