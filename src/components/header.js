import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'
import logo from '../images/logo-solo.svg'

const activeStyle = {
  boxShadow: 'inset 0 -2px 0 0 #009FFD'
}

const Header = () => (
  <header className={styles.header} role='banner'>
    <nav className={styles.nav} role='navigation'>
      <Link className={styles.link} activeStyle={activeStyle} exact to='/'>HOME</Link>
      <Link className={styles.link} activeStyle={activeStyle} to='/services/'>SERVICES</Link>
      <Link className={styles.logo} to='/'>
        <img className={styles['logo__img']} src={logo} alt='Centurion Site Servicess logo' />
      </Link>
      <Link className={styles.link} activeStyle={activeStyle} to='/team/'>TEAM</Link>
      <Link className={styles.link} activeStyle={activeStyle} to='/contact/'>CONTACT</Link>
    </nav>
  </header>
)

export default Header
