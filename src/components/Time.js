import React, { Component } from 'react';

class Time extends Component{
  render(){
    return(
      <div className="time" id={this.props.time}>
      {this.props.time[this.props.time.length -1]=== "0" ? this.props.time: ""}
      </div>
    )
  }
}

export default Time
