// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract SimpleStorage {
  uint storedData;
  uint result;
  uint temp;

  function TrafficVolumePerformanceReward(uint thisYear, uint lastYear) public {
    result = thisYear * 15;
  }

  function getResult() public view returns (uint) {
    return result;
  }

  function get() public view returns (uint) {
    return storedData;
  }

  function set(uint x) public {
    storedData = x;
  }
}
