import styles from "./EmojiPicker.module.scss";

export default function EmojiList({ children }) {
  return <div className={styles.emojiList}>{children}</div>;
}
