require("@nomiclabs/hardhat-waffle"); //this is required

// import dotenv npm pakage
require("dotenv").config({ path: ".env" }); //Loads .env file contents into process.env.

module.exports = {
  solidity: "0.8.4",
  //define which test network to deploy contract
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_KEY_URL, //get data from env file
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
