import React from "react";
import styles from './styles.module.scss';

interface SeparatedListProps {
  ariaLabel?: string;
  ariaLabelledBy?: string;
  items: Array<React.ReactNode>;
}

export const SeparatedList: React.FC<SeparatedListProps> = ({ ariaLabel, ariaLabelledBy, items }) => (
  <ul
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledBy}
    className={styles.root}
  >
    {items.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
)
