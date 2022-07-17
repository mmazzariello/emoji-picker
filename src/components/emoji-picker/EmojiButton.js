import styles from "./EmojiPicker.module.scss";

const EmojiButton = ({ emoji, onClick }) => {
  const handleClick = () => {
    onClick(emoji);
  };

  return (
    <button onClick={handleClick} className={styles.emojiButton}>
      {emoji.symbol}
    </button>
  );
};

export default EmojiButton;
