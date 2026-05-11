import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const SearchBar = ({ city, setCity, handleSearch, handleLocate }) => {
  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      <button onClick={handleSearch} aria-label="Search city">
        <FaSearch />
      </button>

      <button className="location-btn" onClick={handleLocate}>
        <FaMapMarkerAlt />
        Use my location
      </button>

    </div>
  );
};

export default SearchBar;