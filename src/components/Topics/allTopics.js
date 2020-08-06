import React, { Component } from 'react'
import Layout from '../Layout/index'
import AllTopics from '../Tables/topicsTable'
import UserRoute from '../UserRoute/Route'
export default class allTopics extends Component {
    render() {
        return (
            <Layout RouteUserLayout={
                this.props.history
            } activepage="keepOpenTopics" page="all_topics">
                 <UserRoute Route="All" destination="Topics" />
                <br/>
                <div className="allTopics">
                    <AllTopics/>
                </div>
            </Layout>
        )
    }
}
