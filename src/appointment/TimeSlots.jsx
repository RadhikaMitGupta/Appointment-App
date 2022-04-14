import "./TimeSlots.css"

import { useParams } from "react-router-dom"

const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
 const TimeSlots = ()=> {
    const { TimeSlots } = useParams();
    const handleClick1=()=>{
        alert("Your Appointment in booked on this day")
    }
    const handleClick2=()=>{
        alert("you can book slots aqua color")
    }
   
    return(
        
        <div id="box">
         <h1>TimeSlot {TimeSlots}</h1>
         <p>Today : {date}</p>
          <div className="allfather">
              <div className="allchild">
                 <p>8 : 00 AM</p>
                  <p>8 : 20 AM</p>
                  <p> 8 : 40 AM</p>
                  <p> 9 : 00 AM </p>   
                  <p> 9 : 20 AM</p>
              </div>
              <div className="allchild">
                 <p>9 : 40 AM</p>
                  <p>10 : 00 AM</p>
                  <p> 10 : 20 AM</p>
                  <p> 10 : 40 AM </p>   
                  <p> 11 : 00 AM</p>
              </div>
              <div className="allchild">
                 <p>11 : 20 AM</p>
                  <p>11 : 40 AM</p>
                  <p>12 : 00 AM</p>
                  <p> 9 : 00 AM </p>   
                  <p> 9 : 20 AM</p>
              </div>
              <div className="allchild">
                 <p>8 : 00 AM</p>
                  <p>8 : 20 AM</p>
                  <p> 8 : 40 AM</p>
                  <p id="booke"> 9 : 00 AM </p>   
                  <p> 9 : 20 AM</p>
              </div>
              <div className="allchild">
                 <p>8 : 00 AM</p>
                  <p id="booke" >8 : 20 AM</p>
                  <p> 8 : 40 AM</p>
                  <p id="avil"> 9 : 00 AM </p>   
                  <p id="avil"> 9 : 20 AM</p>
              </div>
          </div>
          <button id="booked" onClick={handleClick1}>Booked</button>
          <button  id="avila" onClick={handleClick2}>Available</button>

          </div>
    )
}
 export default TimeSlots