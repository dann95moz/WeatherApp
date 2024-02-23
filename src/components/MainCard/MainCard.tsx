import { PropsWithChildren } from 'react';
import styles from './MainCard.module.css'

interface MainCardProps{
    title: string;
    subTitle?: string;
    description: string;
}

const MainCard = ({title, subTitle, description, children}: PropsWithChildren<MainCardProps>) => {
  return (
    <div className={styles.container}>
      <div className='text-container'>
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.subtitle}>{subTitle}</h4>
        <h4 className={styles.description}>{description}</h4>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default MainCard
