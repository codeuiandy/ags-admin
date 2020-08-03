import React, { Component } from 'react';
import './post.css'
import Layout from '../Layout/index'
import Newposts from './newPostGraph'
import ReportedPosts from './reportedPosts'
import UserRoute from '../UserRoute/Route'
class overview extends Component {
    render() {
        return (
            <Layout activepage="keepOpenPosts" page="postOverview">
                 <UserRoute Route="Post" destination="Overview" />
                 <br/>
                <div className="postsOverview">
                    <div className="postChart1">
                        <Newposts />
                    </div>
                    <div className="postChart2">
                    <ReportedPosts />
                    </div>
                </div>
            </Layout>
        );
    }
}

export default overview;
