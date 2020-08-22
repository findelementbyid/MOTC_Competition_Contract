import React, { Component } from "react";
// import SimpleStorageContract from "./contracts/SimpleStorage.json";
import Subsidy from "../contracts/Subsidy.json"
import getWeb3 from "../getWeb3";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import "../App.css";

class push extends Component {
  state = { storageValue: 0, temp: 0, result: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Subsidy.networks[networkId];
      const instance = new web3.eth.Contract(
        Subsidy.abi,
        deployedNetwork && deployedNetwork.address,
      );


      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    // await contract.methods.set(5).send({ from: accounts[0] });
    // await contract.methods.TrafficVolumePerformanceReward(3000, 1000).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    // const response = await contract.methods.get().call();
    
    // Update state with the result.
    // this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Blockchain Subsidy System</h1>
        
        <h2>You can push these data into blockchain to calculate the subsidy amount.</h2>
        <h4>幸福巴士路線名稱:
          <input ref="_routeName" style={{ width: 200, height: 20 }}></input>
        </h4>
        <h4>幸福巴士路線編號:
          <input ref="_routeNum" style={{ width: 200, height: 20 }}></input>
        </h4>
        <h4>班次時間:
          <input ref="_routeTime" style={{ width: 200, height: 20 }}></input>
        </h4>
        <h4>每車公里合理營運成本:
          <input ref="_cost" value="38570" style={{ width: 200, height: 20 }}></input>
        </h4>
        <h4>每車公里收入:
          <input ref="_incomePerCar" style={{ width: 200, height: 20 }}></input>
        </h4>
        <h4>日駛班次:
          <input ref="_timesPerCar" style={{ width: 200, height: 20 }}></input>
        </h4>
        <h4>行駛日數:
          <input ref="_numberOfDate" style={{ width: 200, height: 20 }}></input>
        </h4>
        <h4>補貼里程:
          <input ref="_mileage" style={{ width: 200, height: 20 }}></input>
        </h4>
        <h4>路線成績因子:
          <input ref="_ratio" value="100" style={{ width: 200, height: 20 }}></input>
        </h4>
        <h4>公司總成績因子:
          <input ref="_companyScore" value="100" style={{ width: 200, height: 20 }}></input>
        </h4>
        <button onClick={async () => {
          try {
            var _routeName = this.refs._routeName.value;
            var _routeNum = parseInt(this.refs._routeNum.value);
            var _routeTime = this.refs._routeTime.value;
            var _cost = parseInt(this.refs._cost.value);
            var _incomePerCar = parseInt(this.refs._incomePerCar.value);
            var _timesPerCar = parseInt(this.refs._timesPerCar.value);
            var _numberOfDate = parseInt(this.refs._numberOfDate.value);
            var _mileage = parseInt(this.refs._mileage.value);
            var _ratio = parseInt(this.refs._ratio.value);
            var _companyScore = parseInt(this.refs._companyScore.value);
            const { accounts, contract } = this.state;
            await contract.methods.pushData(_routeName, _routeNum, _routeTime, _cost, _incomePerCar, _timesPerCar, _numberOfDate, _mileage, _ratio, _companyScore).send({ from: accounts[0] });
          }
          catch (e) {
            console.log(e);
          }
        }}>Push</button>

        <Link to="/query">
            <Button renderAs="button">
                <span>query</span>
            </Button>
        </Link>
      </div>
    );
  }
}

export default push;
