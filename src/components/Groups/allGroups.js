import React, { Component } from 'react'
import Layout from '../Layout/index'
import AllGroupsTable from '../Tables/groupTable'
export default class allGroups extends Component {
    render() {
        return (
            <Layout>
                <div className="allGrpsWrapper">
                <AllGroupsTable/>    
                </div>
                
            </Layout>
        )
    }
}
