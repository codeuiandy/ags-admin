import React, { Component } from 'react'
import EventTable from '../Tables/eventListTable'
import Layout from '../Layout/index'
import ComfirmModal from '../Modals/comfirmModal'
export default class eventList extends Component {
    render() {
        return (
            <div>
                <Layout page="event-list">
                <div id="event-list-wraper">
                <EventTable/>
              
                </div>  
                </Layout>
                <ComfirmModal/>
            </div>
        )
    }
}
