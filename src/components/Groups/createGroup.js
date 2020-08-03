import React, { Component } from 'react'
import Layout from '../Layout/index'
import Grpicon from './Group.png'
import UserRoute from '../UserRoute/Route'
export default class createGroup extends Component {
    render() {
        return (
            <Layout page="create-group" activepage="keepOpenGroup">
                <UserRoute Route="Create" destination="Group" />
                <br/>
                <div className="create-grp">
                    <div className="grp1">
                     <label>Group Name</label>
                     <input type="text"/>
                    </div>

                    <div className="grp2">
                        <span>Avater</span>
                        <span className="avartarCircle">
                        <i class="fa fa-user" aria-hidden="true"></i>

                        </span>
                        <span className="createGrpinput">
                             <input type="file"/>   

                        </span>

                        <div className="chsFilebtn">
                        <button>Choose File</button>
                        </div>
                    
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
                            <button>Create Group</button>
                        </div>
                </div>
            </Layout>
        )
    }
}
