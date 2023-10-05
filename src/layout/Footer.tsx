
import Image from 'next/image';
import styles from './Footer.module.scss';

import LinkedIn from '@/assets/icons/linkedin-in.svg';
import GitHub from '@/assets/icons/github.svg';
import WebsiteIcon from '@/assets/icons/up-right-from-square-solid.svg';

export const Footer = () => {
  return (
    <footer className={styles.wrapper} id="contact">
      <div className={styles.contacts}>
        <a href={process.env.NEXT_PUBLIC_URL_LINKEDIN}>
          <Image src={LinkedIn} alt="LinkedIn Icon" height={25} width={25}/>
          <h3>LinkedIn</h3>
        </a>
        <a href={process.env.NEXT_PUBLIC_URL_GITHUB}>
          <Image src={GitHub} alt="GitHub Icon" height={25} width={25}/>
          <h3>GitHub</h3>
        </a>
        <a href={process.env.NEXT_PUBLIC_URL_DEVURL}>
          <Image src={WebsiteIcon} alt="GitHub Icon" height={25} width={25}/>
          <h3>Developer Site</h3>
        </a>


      </div>
    </footer>
  );
};