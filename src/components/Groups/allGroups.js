import React, { Component } from 'react'
import Layout from '../Layout/index'
import AllGroupsTable from '../Tables/groupTable'
import UserRoute from '../UserRoute/Route'
export default class allGroups extends Component {
    render() {
        return (
            <Layout RouteUserLayout={
                this.props.history
            } page="all_groups" activepage="keepOpenGroup">
                   <UserRoute Route="All" destination="Groups" />
                   <br/>
                <div className="allGrpsWrapper">
                <AllGroupsTable/>    
                </div>
                
            </Layout>
        )
    }
}
