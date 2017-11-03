import React from 'react'
import PropTypes from 'prop-types'
import _throttle from 'lodash.throttle'

// Idea from https://themeteorchef.com/tutorials/react-sticky-scroll
// Cannot make into a functional component because this requires component lifecyles.

// TODO: Develop a way to stop sticky at a certain point.

class Sticky extends React.Component {
  componentDidMount () {
    const stickies = Array.from(document.querySelectorAll(`.${this.props.baseCSS}`))

    document.addEventListener('scroll', _throttle((e) => {
      const fromTop = document.documentElement.scrollTop || document.body.scrollTop
      const pageBottom = document.documentElement.scrollHeight || document.body.scrollHeight

      stickies.map(sticky => {
        const start = this.props.start || sticky.offsetTop
        const stop = this.props.stop || pageBottom

        if (fromTop >= start && fromTop <= stop) {
          sticky.firstElementChild.className = this.props.activeChildCSS
        } else {
          sticky.firstElementChild.className = this.props.inactiveChildCSS
        }
      })
    }, 16.67))
  }

  render () {
    const { baseCSS, inactiveChildCSS, start, stop, children } = this.props

    return (
      <div
        className={baseCSS}
        data-sticky-start={start}
        data-sticky-stop={stop}
      >
        <div
          className={inactiveChildCSS}
        >
          {children}
        </div>
      </div>
    )
  }
}

Sticky.PropTypes = {
  baseCSS: PropTypes.string.isRequired,
  activeChildCSS: PropTypes.string,
  inactiveChildCSS: PropTypes.string,
  start: PropTypes.number,
  stop: PropTypes.number,
  children: PropTypes.node.isRequired
}

export default Sticky
