import React, { Component } from 'react'
import Layout from '../Layout/index'
import Grpicon from './Group.png'
import UserRoute from '../UserRoute/Route'
export default class createGroup extends Component {
    render() {
        return (
            <Layout RouteUserLayout={
                this.props.history
            } page="create-group" activepage="keepOpenGroup">
               
               
                <div className="create-grp">
                    <div className="grp1">
                     <label>Group Name</label>
                     <input type="text"/>
                    </div>


                    <div className="grp3">
                        <input type="file"/>
                        <div className="getGrpImg">
                            <img src={Grpicon} alt="" srcset=""/>
                            <p>Drop Image Here Or <span style={{color:"orange"}}>Browse</span> </p>
                            <p>support .jpg,PNG.</p>
                        </div>
                        </div>


                        <div className="grp4">
                        <label>
                        Description
                        </label>

                        <textarea placeholder="Write something nice about the group"
                        type="text"/>
                        </div>

                        <div className="createGRpBTN">
                            <div>
                            <div class="form-group">
    <label for="interval">Open Or Closed Group?</label>
    <select class="form-control" id="interval">
    
      <option>Open Group</option>
      <option>Closed Group</option>
     
    </select>
  </div>
                            </div>
                          
                        </div>
                        <div className="btnCtreate">
                            <button >Create Group</button>
                        </div>
                        
                </div>
            </Layout>
        )
    }
}
