import React, { Component } from 'react'
import EventTable from '../Tables/eventListTable'
import Layout from '../Layout/index'
import ComfirmModal from '../Modals/comfirmModal'
import UserRoute from '../UserRoute/Route'

export default class eventList extends Component {
    render() {
        return (
            <div>
                <Layout page="event-list" activepage="keepOpenEvents">
                <UserRoute Route="All" destination="Events" />
                <br/>
                <div id="event-list-wraper">
                <EventTable/>
              
                </div>  
                </Layout>
                <ComfirmModal/>
            </div>
        )
    }
}
