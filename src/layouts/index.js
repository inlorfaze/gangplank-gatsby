import React from 'react'
import Link from 'gatsby-link'
require('typeface-roboto')
require('typeface-habibi')
import base from './base.css'
import Container from '../components/container'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class Template extends React.Component {
  constructor(props) {
    super(props);

    this.state = { didMount: false }

  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ didMount: true })
    }, 0)
  }

  componentWillUnmount() {
    clearTimeout();
    }


  render() {
    const { didMount } = this.state

    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Navigation />
        <div className={`fade-in ${didMount && 'visible'}`}
        >
        {children()}
        </div>
        <Footer />
      </Container>
    )
  }
}

export default Template
