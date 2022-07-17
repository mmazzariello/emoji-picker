import EmojiPickerInput from "./components/emoji-picker/EmojiPickerInput";
import styles from "./components/emoji-picker/EmojiPicker.module.scss";

function App() {
  return (
    <div className={styles.generalContainer}>
      <EmojiPickerInput />
    </div>
  );
}

export default App;
