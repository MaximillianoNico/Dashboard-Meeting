import React from 'react'
import Layout from '../../component/Layout'

import './styles.scss'

class Index extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Layout title="Boardash">
        <div className="dashboard__index">
          <div>
            <span className="dashboard__title">Meeting</span>
          </div>
          <div className="dashboard__cards">
            <div className="card-item">
              <div className="card-item-icon">

              </div>
              <div className="card-detail">
                <div className="card-title">Number of meeting</div>
                <div className="card-total">
                  <p className="count">36</p>
                  <p className="count-month">This month</p>
                </div>
              </div>
            </div>
            <div className="line-vertical"></div>
            <div className="card-item">
              <div className="card-item-icon">

              </div>
              <div className="card-detail">
                <div className="card-title">Recheduled meeting</div>
                <div className="card-total">
                  <p className="count">36</p>
                  <p className="count-month">This month</p>
                </div>
              </div>
            </div>
            <div className="line-vertical"></div>
            <div className="card-item">
              <div className="card-item-icon">

              </div>
              <div className="card-detail">
                <div className="card-title">Cancelled Meeting</div>
                <div className="card-total">
                  <p className="count">36</p>
                  <p className="count-month">This month</p>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard__card-title">
            <p>Today - 8 meeting</p>
          </div>
          <div className="dashboard__cards-meeting">
            <div className="card-meeting">
              <div className="title-meeting">
                <div className="meeting-user-img">
                  <img className="user-img" src="https://yt3.ggpht.com/a-/AAuE7mD8j66Gv5r4oLf48Ij7PMljbIm_-GrASQ-CSA=s900-mo-c-c0xffffffff-rj-k-no"/>
                </div>
                <div className="title-desc">
                  <div  className="title-desc-name">
                    <p>Design catchup</p>
                  </div>
                  <div className="title-desc-mail">
                    <p>billgates@microsoft.com</p>
                  </div>
                  <p className="title-desc-time">10 : 30 AM</p>
                </div>
              </div>
              <div className="status-meeting">
                <p className="going">9 Member Going</p>
                <p className="pending">2 Pending</p>
              </div>
              <div className="users-meeting">
                <div className="users-img">
                  <img className="img-user1" src="https://yt3.ggpht.com/a-/AAuE7mD8j66Gv5r4oLf48Ij7PMljbIm_-GrASQ-CSA=s900-mo-c-c0xffffffff-rj-k-no" className="user-png"/>
                  <img src="https://yt3.ggpht.com/a-/AAuE7mD8j66Gv5r4oLf48Ij7PMljbIm_-GrASQ-CSA=s900-mo-c-c0xffffffff-rj-k-no" className="user-png"/>
                  <img src="https://yt3.ggpht.com/a-/AAuE7mD8j66Gv5r4oLf48Ij7PMljbIm_-GrASQ-CSA=s900-mo-c-c0xffffffff-rj-k-no" className="user-png"/>
                  <img src="https://yt3.ggpht.com/a-/AAuE7mD8j66Gv5r4oLf48Ij7PMljbIm_-GrASQ-CSA=s900-mo-c-c0xffffffff-rj-k-no" className="user-png"/>
                  <img src="https://yt3.ggpht.com/a-/AAuE7mD8j66Gv5r4oLf48Ij7PMljbIm_-GrASQ-CSA=s900-mo-c-c0xffffffff-rj-k-no" className="user-png"/>
                </div>
                <div className="users-total-count">
                  <p>+6 more</p>
                </div>
              </div>
              <button className="btn-view">
                View
              </button>
            </div>
            <div className="card-meeting">
              <div className="title-meeting">
                <div className="meeting-user-img">
                  <img className="user-img" src="https://yt3.ggpht.com/a-/AAuE7mD8j66Gv5r4oLf48Ij7PMljbIm_-GrASQ-CSA=s900-mo-c-c0xffffffff-rj-k-no"/>
                </div>
                <div className="title-desc">
                  <div  className="title-desc-name">
                    <p>Design catchup</p>
                  </div>
                  <div className="title-desc-mail">
                    <p>billgates@microsoft.com</p>
                  </div>
                  <p className="title-desc-time">10 : 30 AM</p>
                </div>
              </div>
              <div className="status-meeting">
                <p className="going">9 Member Going</p>
                <p className="pending">2 Pending</p>
              </div>
              <div className="users-meeting">
                <div className="users-img">
                  <img className="img-user1" src="https://yt3.ggpht.com/a-/AAuE7mD8j66Gv5r4oLf48Ij7PMljbIm_-GrASQ-CSA=s900-mo-c-c0xffffffff-rj-k-no" className="user-png"/>
                  <img src="https://yt3.ggpht.com/a-/AAuE7mD8j66Gv5r4oLf48Ij7PMljbIm_-GrASQ-CSA=s900-mo-c-c0xffffffff-rj-k-no" className="user-png"/>
                  <img src="https://yt3.ggpht.com/a-/AAuE7mD8j66Gv5r4oLf48Ij7PMljbIm_-GrASQ-CSA=s900-mo-c-c0xffffffff-rj-k-no" className="user-png"/>
                  <img src="https://yt3.ggpht.com/a-/AAuE7mD8j66Gv5r4oLf48Ij7PMljbIm_-GrASQ-CSA=s900-mo-c-c0xffffffff-rj-k-no" className="user-png"/>
                  <img src="https://yt3.ggpht.com/a-/AAuE7mD8j66Gv5r4oLf48Ij7PMljbIm_-GrASQ-CSA=s900-mo-c-c0xffffffff-rj-k-no" className="user-png"/>
                </div>
                <div className="users-total-count">
                  <p>+6 more</p>
                </div>
              </div>
              <button className="btn-view">
                View
              </button>
            </div>
          
          </div>
        </div>
      </Layout>
    )
  }
}

export default Index