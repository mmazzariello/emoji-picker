import React, { useState } from "react";
import styles from "./EmojiPicker.module.scss";

const EmojiSearch = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    onSearch(e);
  };

  return (
    <div>
      <input
        type="text"
        className={styles.search}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default EmojiSearch;
