import React from 'react'

import './styles.scss'

const SideNavigation = ({}) => (
  <div className="sidebar__index">
    <div className="sidebar__icons-top">
      <i class="fas fa-bookmark"></i>
    </div>
    <div className="sidebar__profile">
      <img className="img-profile" src="https://yt3.ggpht.com/a-/AAuE7mD8j66Gv5r4oLf48Ij7PMljbIm_-GrASQ-CSA=s900-mo-c-c0xffffffff-rj-k-no"/>
      <div className="sidebar__desc">
        <p className="title-profile">Welcome Bill</p>
        <p className="job-profile">Co-founder</p>
      </div>
    </div>
    <div className="sidebar__menu">
      <div className="sidebar__menu-item">
        <div className="menu-icons">
          <i class="fas fa-th-large"></i>
        </div>
        <div className="menu-names">
          <p>Overview</p>
        </div>
      </div>
      <div className="sidebar__menu-item">
        <div className="menu-icons">
          <i class="fas fa-bookmark"></i>
        </div>
        <div className="menu-names">
          <p>Reservation</p>
        </div>
      </div>
      <div className="sidebar__menu-item">
        <div className="menu-icons">
          <i class="far fa-credit-card"></i>
        </div>
        <div className="menu-names">
          <p>Meeting</p>
        </div>
      </div>
      <div className="sidebar__menu-item">
        <div className="menu-icons">
          <i class="fas fa-user-friends"></i>
        </div>
        <div className="menu-names">
          <p>Customer</p>
        </div>
      </div>
      <div className="sidebar__menu-item">
        <div className="menu-icons">
          <i class="fas fa-ticket-alt"></i>
        </div>
        <div className="menu-names">
          <p>Ticket</p>
        </div>
      </div>
      <div className="sidebar__menu-item">
        <div className="menu-icons">
          <i class="far fa-comments"></i>
        </div>
        <div className="menu-names">
          <p>Support</p>
        </div>
      </div>
      <div className="sidebar__menu-item">
        <div className="menu-icons">
          <i class="fas fa-user"></i>
        </div>
        <div className="menu-names">
          <p>Profile</p>
        </div>
      </div>
    </div>
    <div className="sidebar__btn-quit">
      <div className="sidebar__menu-item">
        <div className="menu-icons">
          <i class="fas fa-power-off"></i>
        </div>
        <div className="menu-names">
          <p>Logout</p>
        </div>
      </div>
    </div>
  </div>
)

export default SideNavigation