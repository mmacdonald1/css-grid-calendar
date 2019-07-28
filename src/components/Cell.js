import React, { Component } from 'react';
import Event from '../components/Event.js'

class Cell extends Component{
  render(){
    return(
      <div className="cell" id={this.props.i} onMouseDown={this.props.handleEvent} onMouseUp={this.props.handleEventDrag}>
      {this.props.cell === true ? <Event />: ""}
      </div>
    )
  }
}

export default Cell
