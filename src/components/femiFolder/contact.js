import React, { Component } from 'react'
import Layout from '../Layout/index'
import './index.css'

export default class allTopics extends Component {
    render() {
        return (
            <Layout RouteUserLayout={
                this.props.history
            } activepage="keepOpenTopics" page="all_topics">


{/* 
                REMOVE CARD BUTTOM MARGIN BY EDITING 
                .contact-cards{
       margin-bottom:5px;

             } */}
                

                <div className="contact-card-container">
<div className="contact-cards">
{/* 
                REMOVE CARD BUTTOM MARGIN BY EDITING 
                .contact-cards{
       margin-bottom:5px;

             } */}
                 <div className="contact-cards-icon">
                     <div className="wayaUserIcon"></div>
                     <span>
                         <div className="wayaUserName">John Doe</div>
                         <div className="wayaUsernumber">(+234)90654237637</div>
                     </span>
                 </div>

                 <div className="wayaUseractions">
                     <button>Chat</button>
                     <button>Send Message</button>
                 </div>
              </div>

              

              <div className="contact-cards">

                 <div className="contact-cards-icon">
                     <div className="wayaUserIcon"></div>
                     <span>
                         <div className="wayaUserName">John Doe</div>
                         <div className="wayaUsernumber">(+234)90654237637</div>
                     </span>
                 </div>

                 <div className="wayaUseractions">
                     <button>Chat</button>
                     <button>Send Message</button>
                 </div>
              </div>




              <div className="contact-cards">

<div className="contact-cards-icon">
    <div className="wayaUserIcon"></div>
    <span>
        <div className="wayaUserName">John Doe</div>
        <div className="wayaUsernumber">(+234)90654237637</div>
    </span>
</div>

<div className="wayaUseractions">
    <button>Chat</button>
    <button>Send Message</button>
</div>
</div>




<div className="contact-cards">

                 <div className="contact-cards-icon">
                     <div className="wayaUserIcon"></div>
                     <span>
                         <div className="wayaUserName">John Doe</div>
                         <div className="wayaUsernumber">(+234)90654237637</div>
                     </span>
                 </div>

                 <div className="wayaUseractions">
                     <button>Chat</button>
                     <button>Send Message</button>
                 </div>
              </div>

                </div>


              


              
            </Layout>
        )
    }
}
