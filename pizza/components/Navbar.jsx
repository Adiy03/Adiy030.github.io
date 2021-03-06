import styles from "../styles/Navbar.module.css"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src='/img/me.jpg' width="32" height={32} />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now</div>
          <div className={styles.text}>0851 550 32 886</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          {/* <Image src='/img/me.jpg' width='120px' height="60px" /> */}
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src='/img/me.jpg' width='30px' height="30px" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar