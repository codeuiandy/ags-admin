import React, { useState } from 'react'
import './topics.css'
import Layout from '../Layout/index'
import ImageIcon from '../Posts/Vector.png'
import ImageIcon2 from './Vector.png'
import UserRoute from '../UserRoute/Route'
import {httpPostFormData} from '../helpers/httpMethods'
import {hideLoader, showLoader} from '../helpers/loader'
import {NotificationManager} from 'react-notifications'
import {useRecoilState} from 'recoil'
import {delet_edit_Handle} from '../../GlobalState/localState'
export const CreateTopics =(props) => {
    let [getEditDetails, setEditDetails] = useRecoilState(delet_edit_Handle)
const [topic , setTopic] = useState({
    
        title: "",
        description: "",
        thumbnail: ""
    
})

console.log(topic)

  const CreateTopic=async()=>{

    if (getEditDetails.edit_content===true) {
        alert("edit")
    }

    else{
    showLoader()
const currenThumbnailtFile = topic.thumbnail[0]

try {
    const formData = new FormData();
formData.append('title', topic.title);
formData.append('description', topic.description);
formData.append('thumbnail', currenThumbnailtFile);


      console.log(formData)
      let res = await httpPostFormData("topics/",formData)
     console.log("res status",res.status) 
     if (res.status === 201) {
             hideLoader()
      console.log(res)
      setTopic({
          title:"",
          description: "",
          thumbnail: ""
      })
      NotificationManager.success(
         "Topic created successfully.",
        "Yepp",
        3000
    );
     }
    
  
      hideLoader()
} catch (error) {
    hideLoader()
}}

  }
        return (
            <Layout RouteUserLayout={
                props.history
            } activepage="keepOpenTopics" page="create_topic">
                    
                <div className="topics-page">
                    <h1>Add Topic</h1>
                    <hr/>
                <form>
                                <div class="form-group">
    <label for="name">Topic Name</label>
    <input value={topic.title} type="text" class="form-control" 
     placeholder="Enter topic" onChange={(e)=>setTopic({...topic,title:e.target.value})}/>
   
  </div>
  <div class="form-group">
    <label for="aboutPlan">Description</label>
    <textarea value={topic.description} placeholder="Topic description"  class="form-control" id="aboutPlan"
      onChange={(e)=>setTopic({...topic,description:e.target.value})}/>
  </div>

  
  <div className="postActions topicActions">
      <div className="postAction topicAction">
          <input type="file" type="file" onChange={(e)=>setTopic({...topic,thumbnail:e.target.files})}/>
<span>
    <img src={ImageIcon} alt=""/>
</span>
      </div>

    

      <div className="postAction">
          <input />
<span>
    <img src={ImageIcon2} alt=""/>
</span>
      </div>
      </div>
                </form>
  

            <div className="addTopicBtn">
                <button onClick={CreateTopic}>{getEditDetails.edit_content===true?"Edit Topic":"Create Topic"}</button>
            </div>
    
                </div>
            </Layout>
        )
    
}
