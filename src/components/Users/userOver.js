import React, { Component } from 'react';
import '../Posts/post.css'
import Layout from '../Layout/index'
import Newusers from './newUsers'
import ReportedUsers from './reportedUsers'
import UserRoute from '../UserRoute/Route'
import FewUsers from '../Tables/fewUsersers'
import './index.css'
class userOver extends Component {
    render() {
        return (
            <Layout activepage="keepOpenPosts" page="postOverview">
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
                      <FewUsers />
                </div>
              
            </Layout>
        );
    }
}

export default userOver;
