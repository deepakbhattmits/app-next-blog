import Link from "next/link";
import { FC } from "react";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import styles from "./MainNavigation.module.css";

const MainNavigation: FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
