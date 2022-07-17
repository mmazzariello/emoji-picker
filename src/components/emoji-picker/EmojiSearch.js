import React, { useState } from "react";

const EmojiSearch = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    onSearch(e);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={value} />
    </div>
  );
};

export default EmojiSearch;
