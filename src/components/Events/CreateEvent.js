import React, { Component } from 'react'
import Layout from '../Layout/index'
import './index.css'
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
export default class CreateEvent extends Component {
    constructor(props){
        super(props)
        this.state={
            startDate:new Date(),
            eventType:"free"
        }
    }
    eventType=(paid)=>{
if (paid === "paid") {
    this.setState({eventType:"paid"})
}

if (paid === "free") {
    this.setState({eventType:"free"})
}
    }
    render() {
        return (
            <div>
                <Layout>
<div id="event-wraper">
    <div className="center-event-form ">
    <h1>Create Event</h1>
    <form >
  <div class="form-group">
     
    <label for="title">Title</label>
    <input type="text" class="form-control" id="title" placeholder="Enter Title"/>
  
  </div>
  <div class="form-group">
    <label for="Presenter">Presenter(s)</label>
    <input type="text" class="form-control" id="Presenter" placeholder="Enter Presenter"/>
  </div>

  <div class="form-group">
    <label for="Presenter">Description</label>
    <textarea type="text" class="form-control" id="Presenter" placeholder="About Event"/>
  </div>
  
  <div className="eventType">
      <span onClick={(e)=>this.eventType("paid")}  className={`${this.state.eventType==="paid"?
      "activeEventBtn":"noneActiveEventBtn"}`}
     >Paid</span> 
       <span onClick={(e)=>this.eventType("free")} className={`${this.state.eventType==="paid"?
      " noneActiveEventBtn":"activeEventBtn"}`}>Free</span>
  </div>

{this.state.eventType==="paid"?
<div>  <div class="form-group">
    <label for="price">Price</label>
    <input type="number" class="form-control" id="price" placeholder=""/>
  </div>
</div>
:""
}



  <div class="form-group">
    <label for="exampleFormControlSelect1">Medium</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>

  <div class="form-group">
    <label for="address">Address</label>
    <input type="text" class="form-control" id="address" placeholder="Enter Event Venue"/>
  </div>
<div className="datePickerEvent">
<div class="form-group">
    <label for="Presenter">Event Start</label>
    <DatePicker selected={this.state.startDate} onChange={date => this.setState({startDate:date})  } 
    showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"/>
  </div>


  <div class="form-group">
    <label for="Presenter">Event End</label>
    <DatePicker selected={this.state.startDate} onChange={date => this.setState({startDate:date})  } 
    showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"/>
  </div>
</div>
 
 
<div class="form-group">
    <label for="address">Address</label>
    <div className="getEventImage">
      <input type="file" class="hideEventInput" id="address" placeholder="Enter Event Venue"/>
      <div className="eventImageInfo">
          <p>Drop Image</p>
          <p>Or</p>
          <button>Browse</button>
          </div>  
    </div>
    
  </div>
  <div className="Esubmitbtn">
      <button>Submit</button>
  </div>
</form>
    </div>
</div>
                </Layout>
                
            </div>
        )
    }
}
