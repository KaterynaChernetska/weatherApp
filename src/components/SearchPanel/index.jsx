import { useState } from "react";
import SearchIcon from "../../assets/icons/search.svg";
import style from "./SearchPanel.module.css";

const SearchPanel = ({ FilterTrips }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    FilterTrips(event.target.value);
  };

  return (
    <div className={style.searchInputContainer}>
      <input
        className={style.searchInput}
        value={searchQuery}
        name="search"
        type="text"
        placeholder="Search your trip"
        onChange={handleSearchInputChange}
      />
      <img className={style.searchIcon} src={SearchIcon} alt="Search Icon" />
    </div>
  );
};
export default SearchPanel;
