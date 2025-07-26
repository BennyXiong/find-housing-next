import React from 'react'
import { GoAAppHeader } from '@abgov/react-components'
import styles from "../Styles/Navbar.module.scss";

const Navbar: React.FC = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.headerTitle}>
                    <div className={styles.headerLink}>
                        <div className={styles.image}>
                            <GoAAppHeader heading={""} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bannerContainer}>
                <div className={styles.headerBanner}>
                    <h2>Get help with housing</h2>
                    <p>Find potential affordable housing options that may suit your situation</p>
                </div>
            </div>
        </>
    )
}

export default Navbar
