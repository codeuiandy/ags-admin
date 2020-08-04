import React, { Component } from 'react';
import '../Posts/post.css'
import Layout from '../Layout/index'
import Newusers from './newUsers'
import ReportedUsers from './reportedUsers'
import UserRoute from '../UserRoute/Route'
import FewUsers from '../Tables/fewUsersers'
import './index.css'
class userOver extends Component {
    constructor(props){
        super(props)
        this.state={
            fewUsers:[{
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
            <Layout activepage="keepOpenUsers" page="usersOverview">
                 <UserRoute Route="Post" destination="Overview" />
                 <br/>
                <div className="postsOverview">
                    <div className="postChart1">
                        <Newusers />
                    </div>
                    <div className="postChart2">
                    <ReportedUsers />
                    </div>
                </div>
                <div className="listOfusers">
                    <span>List Of Users</span> <span className="seeAllGrps">See all</span>
                </div>
                <div className="fewUserWrap">
                      <FewUsers fewUsers={this.state.fewUsers} />
                </div>
              
            </Layout>
        );
    }
}

export default userOver;
