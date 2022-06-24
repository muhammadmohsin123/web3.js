solc = require("solc");

const fs = require("fs");

const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider || "HTTP://127.0.0.1:7545");
const fileContent = fs.readFileSync("demo.sol").toString();

// create an input structure for my solidity complier
var input = {
  language: "Solidity",
  sources: {
    "demo.sol": {
      content: fileContent,
    },
  },

  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log("Output: ", output);

ABI = output.contracts["demo.sol"]["demo"].abi;
const bytecode = output.contracts["demo.sol"]["demo"].evm.bytecode.object;
console.log("ABI", ABI, "bytecode", bytecode);
