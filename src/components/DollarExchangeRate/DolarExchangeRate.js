import React, { Component } from "react";
import Graph from "./Graph/Graph";
import classes from "./DolarExchangeRate.module.css";

class DolarExchangeRate extends Component {
  state = {
    rateSell: "",
    rateBuy: "",
    timeNow: ""
  };

  timeNow = () => {
    const Data = new Date();
    const Year = Data.getFullYear();
    const Month = Data.getMonth();
    const Day = Data.getDate();
    const Hour = Data.getHours();
    const Minutes = Data.getMinutes();
    const Seconds = Data.getSeconds();
    return `${Year}:${Month}:${Day}   ${Hour}:${Minutes}:${Seconds}`
  };

  fetchRate=()=> {
    fetch('https://api.ifcityevent.com/currency').then(res => res.json())
    .then(data => {
      this.setState({
        rateSell: data.rateSell,
        rateBuy: data.rateBuy
      })
    })
  }

  componentDidMount() {
    this.fetchRate();
    this.clock = setInterval(()=> {
      this.setState({
        timeNow: this.timeNow()
      })
    }, 1000)
  }

  render() {
    return (
      <div className={classes.DolarExchangeRate}>
        <h1>Найточніший курс фейковий курс долара тут !</h1>
        <p>Дані станом на {this.timeNow()}</p>
        <p>Купівля ${this.state.rateBuy}</p>
        <p>Продаж ${this.state.rateSell}</p>
        <Graph />
      </div>
    );
  }
}

export default DolarExchangeRate;
