import React, { forwardRef, useState, useRef, useEffect } from "react";
import { data as emojiList } from "./data";
import EmojiSearch from "./EmojiSearch";
import EmojiButton from "./EmojiButton";
import EmojiList from "./EmojiList";
import styles from "./EmojiPicker.module.scss";

export function EmojiPicker(props, inputRef) {
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState([...emojiList]);

  const containerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setEmojis(emojiList);
      }
    });
  }, []);

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    const q = e.target.value;

    if (!!q) {
      const search = emojiList.filter(
        (emoji) =>
          emoji.name.toLowerCase().includes(q) ||
          emoji.keywords.toLowerCase().includes(q)
      );
      setEmojis(search);
    } else {
      setEmojis(emojiList);
    }
  };

  const handleEmojiClick = (emoji) => {
    const cursorPosition = inputRef.current.selectionStart;
    const text = inputRef.current.value;
    const prev = text.slice(0, cursorPosition);
    const next = text.slice(cursorPosition);

    inputRef.current.value = prev + emoji.symbol + next;
    inputRef.current.selectionStart = cursorPosition + emoji.symbol.length;
    inputRef.current.selectionEnd = cursorPosition + emoji.symbol.length;
    inputRef.current.focus();
  };

  return (
    <div ref={containerRef} className={styles.inputContainer}>
      <button className={styles.emojiPickerButton} onClick={handleClickOpen}>
        😊
      </button>
      {isOpen ? (
        <div className={styles.emojiPickerContainer}>
          <EmojiSearch onSearch={handleSearch} />
          <EmojiList>
            {emojis.map((emoji) => (
              <EmojiButton
                key={emoji.symbol}
                emoji={emoji}
                onClick={handleEmojiClick}
              />
            ))}
          </EmojiList>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default forwardRef(EmojiPicker);
