import React from 'react'

import '../../../static/styles.scss'
import './styles.scss'

const TopNavigation = ({}) => (
  <div className="nav__container">
    <div className="nav__index-row">
      <div className="nav__brand">
        <div className="nav__brand logo">
          <h3>Boardash</h3>
        </div>
      </div>
      <div className="nav__search">
        <div className="nav__search-input">
          <input className="search-bar" type="text" placeholder="search" />
          <button className="btn__category">Category <i style={{paddingLeft:'7px',color:'white'}} class="fas fa-angle-down"></i></button>
        </div>
      </div>
      <div className="nav__profile">
        <img
          className="img-profile" 
          src="https://yt3.ggpht.com/a-/AAuE7mD8j66Gv5r4oLf48Ij7PMljbIm_-GrASQ-CSA=s900-mo-c-c0xffffffff-rj-k-no"/>
        <div className="name-profile">Bill Gates</div>
        <div className="nav_profile-btn">
          <i style={{fontSize:'15px',color:'#D2D2D3', textAlign:'center', padding:'3px'}} class="fas fa-plus"></i>
        </div>
      </div>
    </div>
  </div>
)

export default TopNavigation