
import Image from 'next/image';
import styles from './Nav.module.scss'

import GitIcon from '@/assets/icons/github.svg';

export const Nav = () => {
  return (
    <nav
      className={styles.wrapper}
    >
      <div className={styles.bar}>
        <a href="https://github.com/HenriquePi/cover-letter-generator" target="_blank" rel="noreferrer" title="This Site's Repository">
          <Image
            src={GitIcon}
            alt="Github Icon"
            width={30}
            height={30} 
          />
          Public Repo
        </a>
      </div>
    </nav>
  );
};