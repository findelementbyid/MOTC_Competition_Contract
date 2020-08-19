pragma solidity >=0.4.21 <0.7.0;

contract Subsidy {
    uint[] private index;
    uint[][] private info;
    uint[][] private bonus;
    
    constructor() public { 
        index.push(5600);
        //_ratio = 1, _companyScore = 65
        info.push([5600, 38570, 14389, 4, 1700, 1, 65]);
        cal(index[index.length - 1]);
    }
    
    function pushData(uint _path, uint _cost, uint _incomePerCar, uint _timesPerCar, uint _mileage, uint _ratio, uint _companyScore) public {
        bool tag = false;
        for(uint i = 0; i < index.length; i++) {
            if(_path == index[i]) {
                tag = true;
            }
        }
        if(!tag) {
            index.push(_path);
            //_ratio = 1, _companyScore = 65
            info.push([_path, _cost, _incomePerCar, _timesPerCar, _mileage, _ratio, _companyScore]);
            cal(index[index.length - 1]);
        }
        else {}
    }
    
    function cal(uint _path) private {
        uint i = index.length - 1;
        uint result = (((info[i][1] - info[i][2]) * info[i][3] * info[i][4] * info[i][5] * info[i][6]) / 100000);
        bonus.push([_path, result]);
    }
    
    function getBonus(uint _path) public view returns (uint) {
        for(uint i = 0; i < index.length; i++) {
            if(_path == index[i]) {
                return bonus[i][1];
            }
        }
        return 0;
    }
    
    function indexArray() public view returns (uint[] memory) {
        return index;
    }
  
}