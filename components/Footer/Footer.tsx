import { RiGithubFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div>
        <span>find me in:</span>
      </div>
      <div>
        <a
          aria-label="Ismaeel_Akin linkedin profile"
          href="https://www.linkedin.com/in/ismaeelha/"
          target="_blank"
          rel="noreferrer"
        >
          <RiLinkedinFill fill="#607B96" size={25} />
        </a>
      </div>
      <div>
        <a
          aria-label="Ismaeel_Akin twitter profile"
          href="https://x.com/IsmaeelAkin"
          target="_blank"
          rel="noreferrer"
        >
          <RiTwitterFill fill="#607B96" size={25} />
        </a>
      </div>
      <div>
        <a
          aria-label="Ismaeel_Akin github profile"
          href="https://github.com/ismaeelakin/"
          target="_blank"
          rel="noreferrer"
        >
          <RiGithubFill fill="#607B96" size={25} />
        </a>
      </div>
    </footer>
  );
}
