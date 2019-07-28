import React, {Component} from 'react'
import Time from '../components/Time'
import Day from '../components/Day'
import DayTotal from '../components/DayTotal'
import Cell from '../components/Cell.js'

class Calendar extends Component{
  state={
    times:[],
    daytotal:["day total", 8,8,8,8,8,8,8],
    days:["Time","Sun","Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
    grid:[]
  }

  componentDidMount(){
    this.handleTimes()
    this.handleGrid()
  }

  handleTimes = () =>{
    let quarterHour=["00","15","30","45"]
    let times=[]
    for(var i = 1; i < 25; i++){
      for(var j = 0; j < 4; j++){
        times.push(i + ":" + quarterHour[j]);
      }
    }
    this.setState({times:times})
  }

  handleGrid=()=>{
    let emptyStringArr = []
    while(emptyStringArr.length < 673){
      emptyStringArr.push("")
    }
    this.setState({grid:emptyStringArr})
  }
  handleEvent=(e)=>{
    e.persist()
    if(e.target.className==="cell"){
      console.log(e.target.id, "MouseDown")
      let grid = this.state.grid
      grid[e.target.id]= true
      this.setState({grid:grid})
    }
  }

  handleEventDrag=(e)=>{
    e.persist()
    if(e.target.id){
      console.log(e.target.id, "MouseUp")
    }
  }

  render(){
    return(
      <div className="calendar">
        {this.state.days.map((day, i)=> <Day day={day} key={i} />)}
        {this.state.times.map((time, i)=> <Time time={time} key={i}/>)}
        {this.state.grid.map((cell, i)=> <Cell cell={cell} handleEvent={this.handleEvent} handleEventDrag={this.handleEventDrag} i={i}  key={i}/>)}
      </div>
    )
  }
}

export default Calendar
