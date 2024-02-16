
import styles from './Spinner.module.css'
const Spinner = () => {
  return (
    <div>
    <div className={styles.ldsroller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <p>Loading...</p>
    </div>
  )
}

export default Spinner