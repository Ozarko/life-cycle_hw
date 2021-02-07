import React, { Component } from "react";
import Graph from "./Graph/Graph";
import classes from "./DolarExchangeRate.module.css";
import CurrentExhangeRate from "./CurrentExchangeRate/CurrentExchangeRate";
import Loader from "../UI/Loader/Loader";
import Button from "../UI/Button/Button";
import CurrentTime from "./CurrentTime/CurrentTime";

class DolarExchangeRate extends Component {
  state = {
    loaderState: false,
  };

  fetchRate = () => {
    fetch("https://api.ifcityevent.com/currency")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          loaderState: true,
          rateSell: this.normalizeNum(data.rateSell),
          rateBuy: this.normalizeNum(data.rateBuy),
          prevRateSell: this.state.rateSell,
          prevRateBuy: this.state.rateBuy,
        });
        return data;
      });
  };

  componentDidMount() {
    this.fetchRate();
    this.exchangeInterval = setInterval(() => {
      this.fetchRate();
    }, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.exchangeInterval);
  }

  normalizeNum = (num) => {
    return Number(num).toFixed(2);
  };


  render() {
    console.log(this.state)
    
    if (!this.state.loaderState) {
        return <Loader/>;
    }

    return (
      <div className={classes.DolarExchangeRate}>
        <div className={classes.DolarExchangeRateContainer}>
          <h1 onClick={() => this.normalizeNum(this.state.rateBuy)}>
            Найточніший фейковий курс долара !
          </h1>
          <CurrentTime />
          <CurrentExhangeRate
            rateSell={this.state.rateSell}
            prevRateSell={this.state.prevRateSell}
            rateBuy={this.state.rateBuy}
            prevRateBuy={this.state.prevRateBuy}
          />
          <Button clickHandler={() => this.fetchRate()} name={"Oновити !"} />
          <Graph
            data={[
              {
                name: `${new Date().toLocaleTimeString()}`,
                Купівля: `${this.state.rateBuy}`,
                Продаж: `${this.state.rateSell}`,
              },
            ]}
          />
        </div>
      </div>
    );
  }
}

export default DolarExchangeRate;
