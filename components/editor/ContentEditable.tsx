import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import styles from "./contentEditable.module.css";

export default function LexicalContentEditable({
  className,
}: {
  className?: string;
}): JSX.Element {
  return <ContentEditable className={className || styles.root} />;
}
