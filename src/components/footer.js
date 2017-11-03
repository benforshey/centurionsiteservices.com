import React from 'react'
import Link from 'gatsby-link'
import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer} role='contentinfo' id='footer'>
    <section className={styles.legal}>
      <h3>Legal Information</h3>
      <p>&copy; 2017 Centurion Site Services, Inc. All rights reserved.</p>
    </section>
    <section className={styles.links}>
      <h3>Site Links</h3>
      <nav role='navigation'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/services/'>Services</Link></li>
          <li><Link to='/team/'>Team</Link></li>
          <li><Link to='/contact/'>Contact</Link></li>
        </ul>
      </nav>
    </section>
    <section className={styles.contact}>
      <h3>Contact Information</h3>
      <address>
        60 Starbright Ct.<br />
        Martinsbburg, WV 25404<br />
        <br />
        <a href='mailto:office@centurionsiteservices.com'>office@centurionsiteservices.com</a><br />
        <a href='tel:9364332593'>936.433.2593</a>
      </address>
    </section>
    <p className={styles.attribution}>Built by <a href='https://integrisweb.com/?ref=centurion' rel='noopener' target='_blank'>Integris Web</a> using <a href='https://www.gatsbyjs.org/' rel='noopener' target='_blank'>Gatsby</a>.</p>
  </footer>
)

export default Footer
