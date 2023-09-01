import React, { useState } from "react";

function Search({ search }) {
  const [value, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="search">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <input value={value} onChange={handleChange} />
      </form>
    </div>
  );
}

export default Search;
