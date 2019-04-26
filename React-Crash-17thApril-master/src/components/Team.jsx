import React, { Component } from "react";
import VoteCounter from "./VoteCounter";

class Team extends Component {
  render() {
    return (
      <div className="container">
        <img src={this.props.logo} />
        <VoteCounter votes={this.props.votes} onClick={()=>this.props.onClick()}/>
      </div>
    );
  }
}

export default Team;
