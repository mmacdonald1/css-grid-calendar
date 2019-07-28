import React, { Component } from 'react';

class Day extends Component{
  render(){
    return(
      <div className="item">{this.props.day}
      </div>
    )
  }
}

export default Day
