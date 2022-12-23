import { ReactNode } from "react";
import styles from "./placeholder.module.css";

export default function Placeholder({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}): JSX.Element {
  return <div className={className || styles.root}>{children}</div>;
}
