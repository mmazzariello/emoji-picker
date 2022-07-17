import { useRef } from "react";
import EmojiPicker from "./EmojiPicker";

const EmojiPickerInput = () => {
  const refInput = useRef(null);

  // const handleClick = () => {
  //   refInput.current.focus();
  // }

  return (
    <div>
      <input ref={refInput} />
      {/* <button onClick={handleClick}>Click</button> */}
      <EmojiPicker ref={refInput} />
    </div>
  );
};

export default EmojiPickerInput;
