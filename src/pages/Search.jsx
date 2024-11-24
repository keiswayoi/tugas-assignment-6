import React, { useState } from "react";

const Search = ({ search }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    search(input);
    setInput("");
  };

  return (
    <form className="search-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Search movies..."
        value={input}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
