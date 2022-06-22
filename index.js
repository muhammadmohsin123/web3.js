const { Abi } = require("./Abi");
const Web3 = require("web3");
const Eth = require("web3-eth");
const web3 = new Web3(Web3.givenProvider || "HTTP://127.0.0.1:7545");
var eth = new Eth(Eth.givenProvider || "HTTP://127.0.0.1:7545");

// Checking Balance
const getBalance = async () => {
  const balance = await eth.getBalance(
    "0xc721BB554E6fA79fc49d2CC59cBBA737B7048942"
  );
  // Convert to ether
  //   console.log(web3.utils.fromWei(balance), "ether");
};

// Send Transaction
const sendMoney = async () => {
  await eth.sendTransaction({
    from: "0xc721BB554E6fA79fc49d2CC59cBBA737B7048942",
    to: "0x8Ace5e77b1e1724C77ebE9B4a03a9bc740A73d03",
    value: web3.utils.toWei("5", "ether"),
  });
};
// console.log(sendMoney());

// Interacting with smart contracts

const myContract = new web3.eth.Contract(
  Abi,
  "0x4ACf608FDFF8eE581ccf16c3a24ec907593DDd2B"
);
const setValue = async () => {
  await myContract.methods
    .setMessage("mohsin khan")
    .send({ from: "0x8Ace5e77b1e1724C77ebE9B4a03a9bc740A73d03" });

  const message = await myContract.methods.message().call();
  console.log(message);
};
console.log(setValue());
