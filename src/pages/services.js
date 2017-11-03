import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styles from './services.module.css'
import Sticky from '../components/sticky'
import Button from '../components/button'

function renderServices (edges) {
  return edges.map(edge =>
    <section className={styles.service} key={edge.node.wordpress_id}>
      <h2 id={edge.node.title.toLowerCase()}>{edge.node.title}</h2>
      <div className={styles['service__body']} dangerouslySetInnerHTML={{__html: edge.node.content}} />
      <Button text='Get More Info' path={`/contact?srvc=${encodeURIComponent(edge.node.title.toLowerCase())}/`} />
    </section>
  )
}

function renderNav (edges) {
  return edges.map(edge =>
    <li key={edge.node.wordpress_id}><Link to={`/services/#${edge.node.title.toLowerCase()}`}>{edge.node.title}</Link></li>
  )
}

const Services = ({ data }) => {
  const edges = data.allWordpressWpService.edges

  return (
    <main className={styles.content} role='main'>
      <Helmet>
        <title>Services | Centurion</title>
        <meta name='description' content='Our Services: cleaning, construction, handyman, and landscape.' />
      </Helmet>
      <h1 className={styles.masthead}>Centurion<br /> Site <br />Services</h1>
      <Sticky
        baseCSS={styles.sticky}
        inactiveChildCSS={styles['sticky__child--inactive']}
        activeChildCSS={styles['sticky__child--active']}
      >
        <nav role='navigation'>
          <ul className={styles['nav-list']}>
            {renderNav(edges)}
          </ul>
        </nav>
      </Sticky>
      {renderServices(edges)}
    </main>
  )
}

export default Services

export const query = graphql`
query services {
  allWordpressWpService(sort: { fields: [title], order: ASC }) {
    edges {
      node {
        wordpress_id
        title
        content
      }
    }
  }
}
`
