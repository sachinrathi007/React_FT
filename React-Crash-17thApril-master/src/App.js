import React, { Component } from "react";
import logo from "./logo.svg";
import france from "./france.jpg";
import croatia from "./croatia.jpg";
import trophy from "./trophy.jpg";
import "./App.css";
import Team from "./components/Team";

class App extends Component {
  state = {
    counter: 0,
    tags: ["Tag1", "Tag 2", "Tag 3"],

    franceVotes: 0,
    croatiaVotes: 0
  };

  formatCount() {
    return this.state.counter === 0 ? <h1>Zero</h1> : this.state.counter;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.counter === 0 ? "warning" : "primary";
    return classes;
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleClick(team) {
    if (team === "croatia") {
      this.setState({ croatiaVotes: this.state.croatiaVotes + 1 });
    } else if (team === "france") {
      this.setState({ franceVotes: this.state.franceVotes + 1 });
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Experimenting with React</h1>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-primary btn-sm m-2"
        >
          Increment
        </button>
        <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>

        <Team
          votes={this.state.franceVotes}
          logo={france}
          onClick={() => this.handleClick("france")}
        />
        <img src={trophy} />
        <Team
          votes={this.state.croatiaVotes}
          logo={croatia}
          onClick={() => this.handleClick("croatia")}
        />
      </React.Fragment>
    );
  }
}

export default App;
