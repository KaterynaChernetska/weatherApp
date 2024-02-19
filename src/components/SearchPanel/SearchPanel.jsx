import { useState } from "react";

export const SearchPanel = ({FilterTrips}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    FilterTrips(event.target.value);
  };
  
  return (
    <input
      value={searchQuery}
      name="search"
      type="text"
      placeholder="Search your trip"
      onChange={handleSearchInputChange}
    />
  );
};
