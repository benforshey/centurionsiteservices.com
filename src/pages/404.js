import React from 'react'
import Helmet from 'react-helmet'
import styles from './404.module.css'
import Button from '../components/button'
import 'whatwg-fetch'

const NotFoundPage = ({ data }) => {
  function handleSubmit (e) {
    e.preventDefault()

    const form = e.target
    const search = form.querySelector('#search')

    search.value = `site:${data.site.siteMetadata.siteUrl} ${search.value}`
    return form.submit()
  }

  return (
    <main className={styles.content}>
      <Helmet>
        <title>404 | Centurion</title>
        <meta name='description' content='Page not found. Let&rsquo;s find it.' />
      </Helmet>
      <h1>Page Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist. We're not quite sure why this happened, but let&rsquo;s try to get you where you want to be!</p>
      <p>You can use the search feature below to (hopefully) find what you were looking for. You're also welcome to contact us directly with the information at the bottom of the page.</p>
      <form
        id='form'
        action='https://google.com/search'
        target='_blank'
        method='get'
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <p className={styles['form__group']}>
          <label className={styles.label} htmlFor='search'>Search Site</label>
          <input className={styles.input} id='search' name='q' type='search' autoComplete='off' />
          <span className={styles.helper}>What are you searching for?</span>
        </p>
        <Button type='submit' form='form' text='Find It!' />
      </form>
    </main>
  )
}

export default NotFoundPage

export const query = graphql`
query BaseURLQuery {
  site {
    siteMetadata {
      siteUrl
    }
  }
}
`
