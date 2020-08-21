# MOTC_Competition_Contract

## Installation

* Ganache: Personal Ethereum blockchain.
  * https://www.trufflesuite.com/ganache
  
* MetaMask: Web plugin for accessing Ethereum(or Ganache).
  * https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn
  
* Truffle: DApp development framework.
  ```
  npm install -g truffle
  ```
  
## Setup steps

1.Open Ganache.  

2.Compile the contract.  
  ```
  truffle compile
  ```

3.Migrate the contract to Ganache.
  ```
  truffle migrate
  ```

4.Launch the server.
  ```
  cd client/
  npm install
  npm run strat
  ```
  * please make sure that the MetaMask network is same as Ganache(the port number is 8545 by default).
  * In addition, you have to copy the private key of one of the Ganache accounts and then import it into MetaMask.

