import SloganGenerator from '@/components/modules/SloganGenerator'
import styles from './page.module.css'
import { Card } from '@/components/atoms/Card'





export default function Home() {
  return (
   <div className={styles.wrapper}>
      <SloganGenerator />
   </div>
  )
}
