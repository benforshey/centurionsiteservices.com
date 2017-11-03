import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import './defaults.css'
import socialCard from '../images/fb-card.png'

const TemplateWrapper = ({ children, data }) => {
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
      >
        <html lang={`en`} />
        <meta name='description' content={data.site.siteMetadata.description} />

        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#f7e07c' />

        <meta name='apple-mobile-web-app-title' content='Centurion' />
        <meta name='application-name' content='Centurion' />
        <meta name='theme-color' content='#f7e07c' />

        <meta property='og:title' content={data.site.siteMetadata.title} />
        <meta property='og:description' content={data.site.siteMetadata.description} />
        <meta property='og:image' content={socialCard} />
        <meta property='og:type' content='website' />

        <meta property='og:url' content={data.site.siteMetadata.siteUrl} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='og:site_name' content={data.site.siteMetadata.title} />
        <meta name='twitter:image:alt' content={data.site.siteMetadata.description} />
      </Helmet>
      <Header />
      {children()}
      <Footer />
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

export const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      title
      description
      siteUrl
    }
  }
}
`
