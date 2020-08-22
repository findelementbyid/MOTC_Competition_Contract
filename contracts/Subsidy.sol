pragma solidity >=0.4.21 <0.7.0;

contract Subsidy {
    string[][] private routeInfo;  //[routeName, routeNum, routeTime]
    uint[][] private calInfo;      //[routeNum, cost, incomePerCar, timesPerCar, numberOfDate, mileage, ratio, companyScore]
    uint[][] private bonus;        //[routeNum, amount]
    
    
    constructor() public { 
        routeInfo.push(["小14", "5600", "109-8-22-2200"]);
        calInfo.push([5600, 38570, 14379, 4, 121, 910, 100, 100]);
        bonus.push([5600, cal(5600, 38570, 14379, 4, 121, 910, 100, 100)]);
    }
    
    function pushData(string memory _routeName, uint _routeNum, string memory _routeTime, uint _cost, uint _incomePerCar, uint _timesPerCar, uint _numberOfDate, uint _mileage, uint _ratio, uint _companyScore) public returns (bool) {
        bool tag = false;
        bool modifyOrNot = false;
        for(uint i = 0; i < routeInfo.length; i++) {
            if(keccak256(abi.encodePacked(_routeName)) == keccak256(abi.encodePacked(routeInfo[i][0]))) {
                if(keccak256(abi.encodePacked(_routeTime)) == keccak256(abi.encodePacked(routeInfo[i][2]))) {
                    //route and time are same, reject
                    tag = true;
                }
                else {
                    //same route but different time
                    //routeInfo.push([_routeName, "_routeNum", _routeTime]);
                    calInfo.push([_routeNum, _cost, _incomePerCar, _timesPerCar, _numberOfDate, _mileage, _ratio, _companyScore]);
                    uint temp = cal(_routeNum, _cost, _incomePerCar, _timesPerCar, _numberOfDate, _mileage, _ratio, _companyScore);
                    bonus[i][1] = bonus[i][1] + temp;
                    modifyOrNot = true;
                }
            }
        }
        if(!tag && !modifyOrNot) {
            routeInfo.push([_routeName, "_routeNum", _routeTime]);
            calInfo.push([_routeNum, _cost, _incomePerCar, _timesPerCar, _numberOfDate, _mileage, _ratio, _companyScore]);
            uint result = cal(_routeNum, _cost, _incomePerCar, _timesPerCar, _numberOfDate, _mileage, _ratio, _companyScore);
            bonus.push([_routeNum, result]);
            return true;
        }
        else if(modifyOrNot) return true;
        else return false;
    }
    
    function cal(uint _routeNum, uint _cost, uint _incomePerCar, uint _timesPerCar, uint _numberOfDate, uint _mileage, uint _ratio, uint _companyScore) private returns (uint) {
        uint result = ((_cost - _incomePerCar) * _timesPerCar * _numberOfDate * _mileage * _ratio * _companyScore) / 1000000000;
        return result;
    }
    
    function getBonus(uint _route) public view returns (uint) {
        for(uint i = 0; i < bonus.length; i++) {
            if(_route == bonus[i][0]) {
                return bonus[i][1];
            }
        }
        return 0;
    }
    
    function getBonusLength() public view returns (uint) {
        return bonus.length;
    }
}