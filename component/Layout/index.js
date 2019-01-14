import PropTypes from 'prop-types'
import Head from 'next/head'

import TopNavigation from '../Navigation/TopNavigation/index'
import SideNavigation from '../Navigation/SideNavigation'

import './styles.scss'

const Layout = ({ children, title, isButton}) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
      <title>Okadoc |  Maximilliano</title>
    </Head>
    <div className="index__root">
      <TopNavigation/>
      <div className="index__bg-color-grey">
        <div className="index__container">
          <SideNavigation/>
          {children}
        </div>
      </div>
    </div>
  </div>
)

Layout.PropTypes = {
  title: PropTypes.string.isRequired,
  isButton: PropTypes.string.isRequired
}

export default Layout