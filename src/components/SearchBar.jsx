function SearchBar({ setSearchTerm }) {
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <form>
      <input
        type="text"
        onChange={handleChange}
        placeholder="&#128270;   Search for Tv Serie..."
      />
    </form>
  );
}

export default SearchBar;
