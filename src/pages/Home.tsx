import React from 'react'
import styles from '../styles/Page.module.scss'

const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      <h2>Welcome to Find Housing</h2>
      <p>Find affordable housing programs in Alberta.</p>
    </div>
  )
}

export default Home
