import React, { Component } from "react";
// import SimpleStorageContract from "./contracts/SimpleStorage.json";
import Subsidy from "./contracts/Subsidy.json"
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
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
        <h2>You can check the subsidy amount through the bus route.</h2>
        {/* <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p> */}
        {/* <p>
          Try changing the value stored on <strong>line 40</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div> */}

        {/* <input ref="thisYear" style={{ width: 200, height: 20 }}></input>
        <input ref="lastYear" style={{ width: 200, height: 20 }}></input> */}

        <h4>Enter the route you wanna query:
          <input ref="path" style={{ width: 200, height: 20 }}></input>
        </h4>

        <button onClick={async () => {
          try {
            // var thisYear = parseInt(this.refs.thisYear.value);
            // var lastYear = parseInt(this.refs.lastYear.value);
            var path = parseInt(this.refs.path.value);
            // console.log("this year: " + thisYear + "\nlast year: " + lastYear);
            const { accounts, contract } = this.state;

            // await contract.methods.TrafficVolumePerformanceReward(thisYear, lastYear).send({ from: accounts[0] });
            // const result_response = await contract.methods.getResult().call();
            const result_response = await contract.methods.getBonus(path).call();

            // Update state with the result.
            this.setState({ result: result_response });
          }
          catch (e) {
            console.log(e);
          }
        }}>Query</button>

        <h4>It is expected that this route subsidies: ${this.state.result} 元</h4>

        <h2>You can push these data into blockchain to calculate the subsidy amount.</h2>
        <h4>幸福巴士路線編號:
          <input ref="_path" style={{ width: 200, height: 20 }}></input>
        </h4>
        <h4>每車公里合理營運成本:
          <input ref="_cost" style={{ width: 200, height: 20 }}></input>
        </h4>
        <h4>每車公里收入:
          <input ref="_incomePerCar" style={{ width: 200, height: 20 }}></input>
        </h4>
        <h4>日駛班次:
          <input ref="_timesPerCar" style={{ width: 200, height: 20 }}></input>
        </h4>
        <h4>路線里程:
          <input ref="_mileage" style={{ width: 200, height: 20 }}></input>
        </h4>
        <h4>路線成績因子:
          <input ref="_ratio" style={{ width: 200, height: 20 }}></input>
        </h4>
        <h4>公司總成績因子:
          <input ref="_companyScore" style={{ width: 200, height: 20 }}></input>
        </h4>
        <button onClick={async () => {
          try {
            var _path = parseInt(this.refs._path.value);
            var _cost = parseInt(this.refs._cost.value);
            var _incomePerCar = parseInt(this.refs._incomePerCar.value);
            var _timesPerCar = parseInt(this.refs._timesPerCar.value);
            var _mileage = parseInt(this.refs._mileage.value);
            var _ratio = parseInt(this.refs._ratio.value);
            var _companyScore = parseInt(this.refs._companyScore.value);
            const { accounts, contract } = this.state;
            await contract.methods.pushData(_path, _cost, _incomePerCar, _timesPerCar, _mileage, _ratio, _companyScore).send({ from: accounts[0] });
          }
          catch (e) {
            console.log(e);
          }
        }}>Push</button>
      </div>
    );
  }
}

export default App;
