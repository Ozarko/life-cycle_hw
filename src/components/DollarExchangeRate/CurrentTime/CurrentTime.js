import React, { Component } from "react";
import classes from "./CurrentTime.module.css";

class CurrentTime extends Component {
  state = {
    currentTime: new Date(),
  };

  timer = () =>
    setInterval(() => {
      this.setState({
        currentTime: new Date(),
      });
    }, 1000);

  componentDidMount() {
    this.timer();
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className={classes.CurrentTime}>
        <h5>
          Станом на {this.state.currentTime.toLocaleDateString()}{" "}
          {this.state.currentTime.toLocaleTimeString()} .
        </h5>
      </div>
    );
  }
}

export default CurrentTime;
