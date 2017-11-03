import React from 'react'
import Helmet from 'react-helmet'
import Image from 'gatsby-image'
import styles from './team.module.css'

function renderBiographies (biographies, mediaObject) {
  return biographies.map(edge => {
    const ID = edge.node.acf.picture.wordpress_id

    return (
      <section className={styles.biography} key={ID}>
        <Image className={styles.image} sizes={mediaObject[`${ID}`].sizes} alt={mediaObject[`${ID}`].alt} />
        <h2 className={styles.title}>{edge.node.title}</h2>
        <p className={styles.position}>{edge.node.acf['company_position']}</p>
        <div dangerouslySetInnerHTML={{__html: edge.node.content}} />
      </section>
    )
  })
}

const Team = ({ data }) => {
  const biographies = data.allWordpressWpBiography.edges
  const allMedia = data.allWordpressWpMedia.edges
  const relevantIDs = biographies.map(biography => biography.node.acf.picture.wordpress_id)
  const relevantMedia = relevantIDs.map(ID => allMedia.filter(media => media.node.wordpress_id === ID))
  const mediaObject = {}

  relevantMedia.map(media => {
    mediaObject[`${media[0].node.wordpress_id}`] = {
      alt: `${media[0].node.alt_text}`,
      sizes: media[0].node.localFile.childImageSharp.sizes
    }

    return mediaObject
  })

  return (
    <main className={styles.content} role='main'>
      <Helmet>
        <title>Team | Centurion</title>
        <meta name='description' content='Our Team: the right people with the most effective process.' />
      </Helmet>
      <h1 className={styles.masthead}>The Rallypoint<br /> for <br />Excellent and Effective</h1>
      <p className={styles.lede}>Centurion Site Services, Inc was formed around a very simple concept: combine the right people with the most effective processes. Our result? The&nbsp;Ceturion&nbsp;Way.</p>
      {renderBiographies(biographies, mediaObject)}
    </main>
  )
}
export default Team

export const query = graphql`
query mediaAndBiographies {
  allWordpressWpBiography(sort: { fields: [acf___display_order], order: ASC }) {
    edges {
      node {
        title
        content
        acf {
          company_position
          display_order
          picture {
            wordpress_id
          }
        }
      }
    }
  }

  allWordpressWpMedia {
    edges {
      node {
        wordpress_id
        alt_text
        localFile {
          childImageSharp {
            sizes(maxWidth: 350) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
}
`
