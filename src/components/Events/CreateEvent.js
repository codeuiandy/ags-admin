import React, { Component } from 'react'
import Layout from '../Layout/index'
import './index.css'
import DatePicker from "react-datepicker";
import UserRoute from '../UserRoute/Route'
import "react-datepicker/dist/react-datepicker.css";
export default class CreateEvent extends Component {
    constructor(props){
        super(props)
        this.state={
            startDate:new Date(),
            eventType:"internal",
            eventMedium:"",
            CTA:"Pay"
        }
    }
    

    handleChange  =  (e) => {
      e.preventDefault();
      this.setState({ [e.target.name]: e.target.value });
      if(e.target.value === "freeEvent"){
        this.setState({
          CTA:"Register"
        })
        console.log(this.state.CTA)
      }

      if(e.target.value === "internal"){
        this.setState({
          eventType:"internal"
        })
      }

      if(e.target.value === "external"){
        this.setState({
          eventType:"internal"
        })
      }
    
      }


    render() {
      console.log(this.state.startDate)
        return (
            <div>
                <Layout RouteUserLayout={
					this.props.history
				}  page="create-event" activepage="keepOpenEvents">
                {/* <UserRoute Route="Create" destination="Event" />
                <br/> */}
<div style={{borderRadius:"10px"}} id="event-wraper">
    <div className="center-event-form ">
    <h1>Create Event</h1>
    <form >
  <div class="form-group">
     
    <label for="title">Title</label>
    <input type="text" class="form-control" id="title" placeholder="Enter Title"/>
  
  </div>
  <div class="form-group">
    <label for="Presenter">Event Maximum Capacity</label>
    <input type="number" class="form-control" id="Presenter" placeholder="How many people are you expecting?"/>
  </div>

  <div class="form-group">
    <label for="Presenter">Description</label>
    <textarea type="text" class="form-control" id="Presenter" placeholder="About Event"/>
  </div>


  <div class="form-group">
    <label for="exampleFormControlSelect1">Event Type</label>
    <select
     value={this.state.eventType}
     name="eventType"
    onChange={this.handleChange} 
    class="form-control" id="exampleFormControlSelect1">
        <option value="internal">Internal</option>
      <option value="external">External Event</option>

      
    </select>
  </div>


  {
    this.state.eventType === "internal" || this.state.eventType ===  "external" ?(
      <div class="form-group">
      <label for="exampleFormControlSelect1">Is it paid or free?</label>
      <select
  
      class="form-control" id="exampleFormControlSelect1">
          <option value="internal"></option>
        <option value="external">Free event</option>
         <option>Paid event</option>
        
      </select>
    </div>
    ):""
  }
  
  {/* {
    this.state.eventType === "freeEvent" || this.state.eventType === "externalEvent" ? (
      <div>
<div class="form-group">
    <label for="register">Registration Link</label>
    <input type="text" class="form-control" id="register" placeholder="Event registration link"/>

  </div>
</div>
    )
    :""
  } */}

{/* 
{
    this.state.eventType === "externalEvent" ? (
      <div>
 <div class="form-group">
<label for="price">Price</label>
<input type="number" class="form-control" id="price" placeholder="Event fee"/>
</div>
</div>
    )
    :""
  }

{
    this.state.eventType === "paidEvent" ? (
      <div>
 <div class="form-group">
<label for="price">Price</label>
<input type="number" class="form-control" id="price" placeholder="Event fee"/>
</div>
</div>
    )
    :""
  } */}




  <div class="form-group">
    <label for="exampleFormControlSelect1">Medium</label>
    <select
    value={this.state.eventMedium}
    name="eventMedium"
   onChange={this.handleChange} 
      class="form-control"
       id="exampleFormControlSelect1">
      <option value="inperson">In-Person</option>
      <option value="virtual">Virtual</option>
      <option value="hybrid">Hybrid</option>
      
    </select>
  </div>

{
  this.state.eventMedium === "virtual" || this.state.eventMedium === "hybrid" ? (
    <div class="form-group">
    <label for="address">Enter Link</label>
    <input type="text" class="form-control" id="address" placeholder="eg https://zoom.com"/>
  </div>
  ) : ""}

{
  this.state.eventMedium === "virtual" ? "" : (
  <div class="form-group">
    <label for="address">Address</label>
    <input type="text" class="form-control" id="address" placeholder="Enter Event Venue"/>
  </div>   
  )}
 
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
