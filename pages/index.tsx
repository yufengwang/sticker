import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const Editor = dynamic(() => import("../components/editor"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Editor></Editor>
    </div>
  );
}
