

function Search({searchTerm, onSearchChange}) { //props from PlantPage
  
  return (
    
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      {/* input field for searching plants*/}
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
