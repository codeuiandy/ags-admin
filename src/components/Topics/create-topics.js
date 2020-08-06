import React, { Component } from 'react'
import './topics.css'
import Layout from '../Layout/index'
import ImageIcon from '../Posts/Vector.png'
import ImageIcon2 from './Vector.png'
import UserRoute from '../UserRoute/Route'
export default class createTopics extends Component {
    render() {
        return (
            <Layout RouteUserLayout={
                this.props.history
            } activepage="keepOpenTopics" page="create_topic">
                        <UserRoute Route="Create" destination="Topic" />     
                        <br/>                      
                <div className="topics-page">
                    <h1>Add Topic</h1>
                    <hr/>
                <form>
                                <div class="form-group">
    <label for="name">Topic Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp"
     placeholder="Enter topic"/>
   
  </div>
  <div class="form-group">
    <label for="aboutPlan">Description</label>
    <textarea placeholder="Topic description"  class="form-control" id="aboutPlan"/>
  </div>

  
  <div className="postActions topicActions">
      <div className="postAction topicAction">
          <input type="file"/>
<span>
    <img src={ImageIcon} alt=""/>
</span>
      </div>

    

      <div className="postAction">
          <input type="file"/>
<span>
    <img src={ImageIcon2} alt=""/>
</span>
      </div>
      </div>
                </form>
  

            <div className="addTopicBtn">
                <button>Create Topic</button>
            </div>
    
                </div>
            </Layout>
        )
    }
}
