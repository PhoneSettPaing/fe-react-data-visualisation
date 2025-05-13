function SearchBar({ setSearchTerm, handleClick }) {
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <form>
      <input
        type="text"
        onChange={handleChange}
        placeholder="   Search for Tv Series..."
      />
      <button className="search-button" onClick={handleClick}>
        &#128270;
      </button>
    </form>
  );
}

export default SearchBar;
