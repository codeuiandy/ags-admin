import React, { Component } from 'react'
import Alluser from '../Tables/allUsers'
import Layout from '../Layout/index'
import PageRouteInfo from '../UserRoute/Route'

export default class allUsers extends Component {
    constructor(props){
        super(props)
        this.state={
            allUsers:[{
                name:"John Dooe",
                email:"codeuiandy@gmail.com",
                joined:"Paid",
                registrationDate:"12/12/2020",
                recentActivity:"12/2/2020"
            },
            {
                name:"John Dooe",
                email:"codeuiandy@gmail.com",
                joined:"Paid",
                registrationDate:"12/12/2020",
                recentActivity:"12/2/2020"
            },

            {
                name:"Rohn kooe",
                email:"codeuiandy@gmail.com",
                joined:"Paid",
                registrationDate:"12/12/2020",
                recentActivity:"12/2/2020"
            }

            ,{
                name:"kohn Dooe",
                email:"codeuiandy@gmail.com",
                joined:"Paid",
                registrationDate:"12/12/2020",
                recentActivity:"12/2/2020"
            },{
                name:"cohn Dooe",
                email:"codeuiandy@gmail.com",
                joined:"Paid",
                registrationDate:"12/12/2020",
                recentActivity:"12/2/2020"
            },{
                name:"bohn Dooe",
                email:"codeuiandy@gmail.com",
                joined:"Paid",
                registrationDate:"12/12/2020",
                recentActivity:"12/2/2020"
            }
        ]
        }
    }
    render() {
        return (
            <Layout RouteUserLayout={
                this.props.history
            } activepage="allUsers" page="allUsers">
                   <PageRouteInfo Route="All" destination="Users"/>
                   <br/>
                <div className="allusersWrap">
                <Alluser allUsers={this.state.allUsers}/>
                </div>
               
            </Layout>
        )
    }
}
