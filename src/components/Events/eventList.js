import React, { Component } from 'react'
import UpcomingEventTable from '../Tables/upComingEvents'
import PreviousEventTable from '../Tables/previousEvents'
import Layout from '../Layout/index'
import ComfirmModal from '../Modals/comfirmModal'
import UserRoute from '../UserRoute/Route'

export default class eventList extends Component {
    render() {
        return (
            <div>
                <Layout RouteUserLayout={
					this.props.history
				} page="event-list" activepage="keepOpenEvents">
                <UserRoute Route="All" destination="Events" />
                <br/>
                <h1 className="eventListHeader">Upcoming Events</h1>

                <div id="event-list-wraper">
                <UpcomingEventTable/>
              
                </div>  
                <br/>
                <h1 className="eventListHeader">Previous Events</h1>
             
                <div id="event-list-wraper">
                  
                <PreviousEventTable/>
              
                </div>  
                <br/>
                
                </Layout>
                <ComfirmModal/>
            </div>
        )
    }
}
