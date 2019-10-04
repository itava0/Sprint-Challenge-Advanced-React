import React, { Component } from "react";
import Players from "./components/Players";
import Navbar from "./components/Navbar";
import axios from "axios";

class App extends Component {
  state = {
    player: []
  };
  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(res => {
      this.setState({
        player: [...res.data]
      });
    });
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Players player={this.state.player} />
        </div>
      </>
    );
  }
}

export default App;
