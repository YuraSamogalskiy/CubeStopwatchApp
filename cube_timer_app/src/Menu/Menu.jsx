import styles from './Menu.module.scss'
const Menu = () => {
  return (
    <div className={styles.menu__block}>
      <a className={styles.menu_nav}>All Result</a>
      <a className={styles.menu_nav}>a</a>
      <a className={styles.menu_nav}>a</a>
      <a className={styles.menu_nav}>a</a>
      {/* <div className={styles.menu_nav}>a</div> */}
    </div>
  )
}

export default Menu
