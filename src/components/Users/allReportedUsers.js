import React, { Component } from 'react'
import AllReportedUser from '../Tables/allReportedUsers'
import Layout from '../Layout/index'
import PageRouteInfo from '../UserRoute/Route'
export default class allReportedUsers extends Component {
    constructor(props){
        super(props)
        this.state={
            allReportedUser:[{
                name:"bohn Dooe",
                email:"codeuiandy@gmail.com",
                Reportedon:"12/12/2020",
                reportedFor:"Spam",
                reportedBy:"John Matins"
            },
            {
                name:"bohn Dooe",
                email:"codeuiandy@gmail.com",
                Reportedon:"12/12/2020",
                reportedFor:"Spam",
                reportedBy:"John Matins"
            },

            {
                name:"bohn Dooe",
                email:"codeuiandy@gmail.com",
                Reportedon:"12/12/2020",
                reportedFor:"Spam",
                reportedBy:"John Matins"
            }

            ,{
                name:"bohn Dooe",
                email:"codeuiandy@gmail.com",
                Reportedon:"12/12/2020",
                reportedFor:"Spam",
                reportedBy:"John Matins"
            },{
                name:"bohn Dooe",
                email:"codeuiandy@gmail.com",
                Reportedon:"12/12/2020",
                reportedFor:"Spam",
                reportedBy:"John Matins"
            },{
                name:"bohn Dooe",
                email:"codeuiandy@gmail.com",
                Reportedon:"12/12/2020",
                reportedFor:"Spam",
                reportedBy:"John Matins"
            }
        ]	
        }
    }
    render() {
        return (
            <Layout activepage="reportedUsers" page="reportedUsers">
                <PageRouteInfo Route="Reported" destination="Users"/>
                <br/>
                <div className="allusersWrap">
                <AllReportedUser allReportedUser={this.state.allReportedUser}
                
                />
                </div>
               
            </Layout>
        )
    }
}
