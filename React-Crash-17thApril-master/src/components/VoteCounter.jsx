import React, { Component } from "react";

class VoteCounter extends Component {
  render() {
    return (
      <div>
        {this.props.votes}
        <button
          onClick={() => this.props.onClick()}
          className="btn btn-primary m-2"
        >
          Vote
        </button>
      </div>
    );
  }
}

export default VoteCounter;
