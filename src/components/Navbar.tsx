import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.module.scss'

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Find Housing</h1>
        <div className={styles.mobileToggle} onClick={() => setOpen(!open)}>
          ☰
        </div>
        <div className={`${styles.links} ${open ? styles.show : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
