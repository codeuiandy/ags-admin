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
            endDate:new Date(),
            startTime:new Date(),
            endTime:new Date(),
            eventType:"null",
            eventMedium:"",
            eventFee:"null",
            CTA:"Pay"
        }
        console.log(this.state.startDate)
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
          eventType:"external"
        })
      }
    //for paid internal event it should generate a link for payment and A default CTA of Pay 
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
    <form className="eventForm">
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
    <label for="exampleFormControlSelect1">Medium</label>
    <select
    value={this.state.eventMedium}
    name="eventMedium"
   onChange={this.handleChange} 
      class="form-control"
       id="exampleFormControlSelect1">
         <option value="null">Select Event Medium</option>
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
  this.state.eventMedium === "hybrid" || this.state.eventMedium === "inperson"  ? 
  (
    <div class="form-group">
      <label for="address">Address</label>
      <input type="text" class="form-control" id="address" placeholder="Enter Event Venue"/>
    </div>   
    )
  : ""}

  <div class="form-group">
    <label for="exampleFormControlSelect1">Event Type</label>
    <select
     value={this.state.eventType}
     name="eventType"
    onChange={this.handleChange} 
    class="form-control" id="exampleFormControlSelect1">
       <option value="null">Select Event Type</option>
        <option value="internal">Internal</option>
      <option value="external">External Event</option>

      
    </select>
  </div>


  {
    this.state.eventType === "internal" || this.state.eventType ===  "external" ?(
      <div class="form-group">
      <label for="exampleFormControlSelect1">Is it paid or free?</label>
      <select
  value={this.state.eventFee}
  name="eventFee"
 onChange={this.handleChange}
      class="form-control" id="exampleFormControlSelect1">
          <option value="freeEvent">Free event</option>
         <option value="paidEvent">Paid event</option>
        
      </select>
    </div>
    ):""
  }


{
    this.state.eventType === "internal" & this.state.eventFee === "freeEvent" ?(
      <div>
  <div class="form-group">
<label for="register">CTA Button</label>
    <input type="text" class="form-control" id="register" placeholder="e.g Register, Attend"/>


  </div>

        <div class="form-group">
    <label for="register">Registration Link</label>
    <input type="text" class="form-control" id="register" placeholder="Event registration link"/>

  </div>


      </div>
    ) : ""
  }

{
    this.state.eventType === "internal" & this.state.eventFee === "paidEvent" ?(
      <div>


<div class="form-group">
    <label for="register">Event Fee</label>
    <input type="text" class="form-control" id="register" placeholder="$ 50,000"/>

  </div>
      </div>
    ) : ""
  }


  {
    this.state.eventType === "external" & this.state.eventFee === "freeEvent" ?(
      <div>

<div class="form-group">
<label for="register">CTA Button</label>
    <input type="text" class="form-control" id="register" placeholder="e.g Register, Attend"/>


  </div>

        <div class="form-group">
    <label for="register">Registration Link</label>
    <input type="text" class="form-control" id="register" placeholder="Event registration link"/>

  </div>
      </div>
    ) : ""
  }


{
    this.state.eventType === "external" & this.state.eventFee === "paidEvent" ?(
      <div>

<div class="form-group">
    <label for="register">CTA Button</label>
    <input type="text" class="form-control" id="register" placeholder="e.g Register, Attend"/>

  </div>

        <div class="form-group">
    <label for="register">Registration Link</label>
    <input type="text" class="form-control" id="register" placeholder="Event registration link"/>

  </div>

  <div class="form-group">
    <label for="register">Event Fee</label>
    <input type="text" class="form-control" id="register" placeholder="$ 50,000"/>

  </div>
      </div>
    ) : ""
  }

 
<div className="datePickerEvent">
<div class="form-group">
    <label for="Presenter">Event Start Date</label>
    <DatePicker
      closeOnScroll={true}
      selected={this.state.startDate} 
      onChange={date => this.setState({startDate:date,endDate:date})  }
      withPortal
 
      minDate={new Date()}
    />
  </div>


  <div class="form-group">
    <label for="Presenter">Event End Date</label>
      <DatePicker
      closeOnScroll={true}
      selected={this.state.endDate} 
      onChange={date => this.setState({endDate:date})  }
      withPortal
 
      minDate={this.state.startDate}
    />
  </div>

  
</div>

<div className="datePickerEvent">
<div class="form-group">
    <label for="Presenter">Event Start Time</label>

    <DatePicker
      selected={this.state.startTime} 
      onChange={date => this.setState({startTime:date,endTime:date})  } 
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
      
    />
  </div>


  <div class="form-group">
    <label for="Presenter">Event End Time</label>
    <DatePicker
      selected={this.state.endTime} 
      onChange={date => this.setState({endTime:date})  } 
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
      // minDate={this.state.startTime}
    />
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
