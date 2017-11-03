import React from 'react'
import Helmet from 'react-helmet'
import styles from './index.module.css'
import Button from '../components/button'

const IndexPage = () => (
  <main className={styles.content} role='main'>
    <Helmet title='Home | Centurion' />
    <div className={styles.masthead}>
      <h1>Centurion <span>SITE SERVICES, INC</span></h1>
      <ul>
        <li>Construction</li>
        <li>Preservation</li>
        <li>Renovation</li>
        <li>Site Services</li>
      </ul>
      <Button text='See Our Services' path='/services/' />
    </div>
  </main>
)

export default IndexPage
