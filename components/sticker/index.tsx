import dynamic from "next/dynamic";
import { Rnd } from "react-rnd";
import styles from "./index.module.css";

const Editor = dynamic(() => import("../editor"), {
  ssr: false,
});

const Sticker = () => {
  return (
    <Rnd
      className={styles.sticker}
      default={{
        x: 0,
        y: 0,
        width: 320,
        height: 200,
      }}
    >
      <Editor></Editor>
    </Rnd>
  );
};

export default Sticker;
