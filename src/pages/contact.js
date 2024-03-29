// /*eslint-env browser*/
import React from 'react'
import Helmet from 'react-helmet'
import styles from './contact.module.css'
import Button from '../components/button'
import 'whatwg-fetch'

class Contact extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      contact: '',
      company: '',
      message: '',
      feedback: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.determineContactType = this.determineContactType.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    return this.setState({ [e.target.name]: e.target.value })
  }

  // Quick and dirty autocomplete detection.
  determineContactType (e) {
    // If there's an ampersand, this is an email address. Return early.
    if (/@/.test(e.target.value)) {
      e.target.type = 'email'
      return e.target.setAttribute('autocomplete', 'email')
    }

    // This might be a telephone number.
    if (/^(\+|\d|\()/.test(e.target.value)) {
      e.target.type = 'tel'
      return e.target.setAttribute('autocomplete', 'tel')
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    e.stopPropagation()

    this.setState({ feedback: 'Sending your message…' })

    fetch('https://message.integrisweb.com/mail/', {
      method: 'post',
      body: new FormData(e.target)
    })
    .then(response => {
      if (response.ok) {
        // Message was sent successfully, so clear the form.
        this.setState({
          name: '',
          contact: '',
          company: '',
          message: '',
          feedback: 'Your message has been sent!'
        })
        // Message was sent successfully, so clear the success message.
        return setTimeout(() => {
          this.setState({ feedback: '' })
        }, 3000)
      } else {
        // The message is in limbo.
        return this.setState({ feedback: `Sorry, but it looks like your message hasn’t sent yet. This could mean that the connection between you and our server is slow (maybe you’re offline?), or it could be that we’re having some serious problems. If this message doesn’t go away, please reach out to us using the information at the bottom of this page.` })
      }
    })
    .catch(err => {
      this.setState({
        feedback: `Sorry, we could’t send your message because of the following error: ${err}. Please reach out to us using the information at the bottom of this page.`
      })
    })
  }

  render () {
    return (
      <main className={styles.content} role='main'>
        <Helmet>
          <title>Contact | Centurion</title>
          <meta name='description' content='Contact us: pricing and inquiry information.' />
        </Helmet>
        <h1 className={styles.masthead}>Pricing<br /> and <br />Inquiries</h1>
        <form
          id='form'
          action='https://message.integrisweb.com/mail/'
          method='post'
          className={styles.form}
          onSubmit={this.handleSubmit}
        >
          <p className={styles['form__group']}>
            <label className={styles.label} htmlFor='name'>Name</label>
            <input className={styles.input} id='name' name='name' type='text' autoComplete='name' value={this.state.name} onChange={this.handleChange} />
            <span className={styles.helper}>What can we call you?</span>
          </p>
          <p className={styles['form__group']}>
            <label className={styles.label} htmlFor='message'>Contact Information</label>
            <input className={styles.input} id='contact' name='contact' type='text' autoComplete='email' onInput={this.determineContactType} value={this.state.contact} onChange={this.handleChange} />
            <span className={styles.helper}>How can we reach you for reply?</span>
          </p>
          <p className={styles['form__group']}>
            <label className={styles.label} htmlFor='company'>Company</label>
            <input className={styles.input} id='company' name='company' type='text' autoComplete='organization' value={this.state.company} onChange={this.handleChange} />
            <span className={styles.helper}>What is your company (if any)?</span>
          </p>
          <p className={styles['form__group']}>
            <label className={styles.label} htmlFor='message'>Message</label>
            <textarea className={styles.textarea} id='message' name='message' spellCheck='true' value={this.state.message} onChange={this.handleChange} />
            <span className={styles.helper}>What can we do for you?</span>
          </p>
          <Button type='submit' form='form' text='Send Message' />
          {this.state.feedback ? (
            <p>{this.state.feedback}</p>
          ) : (
            ''
          )}
        </form>
      </main>
    )
  }
}

export default Contact
