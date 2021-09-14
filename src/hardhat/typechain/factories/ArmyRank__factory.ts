/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ArmyRank } from "../ArmyRank";

export class ArmyRank__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    powerLevels_: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    jsonNames_: [string, string, string, string, string],
    overrides?: Overrides
  ): Promise<ArmyRank> {
    return super.deploy(
      powerLevels_,
      jsonNames_,
      overrides || {}
    ) as Promise<ArmyRank>;
  }
  getDeployTransaction(
    powerLevels_: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    jsonNames_: [string, string, string, string, string],
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      powerLevels_,
      jsonNames_,
      overrides || {}
    );
  }
  attach(address: string): ArmyRank {
    return super.attach(address) as ArmyRank;
  }
  connect(signer: Signer): ArmyRank__factory {
    return super.connect(signer) as ArmyRank__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArmyRank {
    return new Contract(address, _abi, signerOrProvider) as ArmyRank;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "int256[5]",
        name: "powerLevels_",
        type: "int256[5]",
      },
      {
        internalType: "string[5]",
        name: "jsonNames_",
        type: "string[5]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "branchPrefix",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[5]",
        name: "jsonNames_",
        type: "string[5]",
      },
    ],
    name: "changeJsonNames",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256[5]",
        name: "powerLevels_",
        type: "int256[5]",
      },
    ],
    name: "changePowerLevels",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "jsonNames",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "powerLevels",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "branchAddr",
        type: "address",
      },
      {
        internalType: "int256",
        name: "power",
        type: "int256",
      },
    ],
    name: "query",
    outputs: [
      {
        internalType: "string",
        name: "uriPrefix",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "branchAddr",
        type: "address",
      },
      {
        internalType: "string",
        name: "prefix",
        type: "string",
      },
    ],
    name: "updateBranchPrefix",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000f8e38038062000f8e833981016040819052620000349162000300565b6200003f3362000113565b60005b60058110156200010a578281600581106200006d57634e487b7160e01b600052603260045260246000fd5b6020020151600282600581106200009457634e487b7160e01b600052603260045260246000fd5b0155818160058110620000b757634e487b7160e01b600052603260045260246000fd5b602002015160078260058110620000de57634e487b7160e01b600052603260045260246000fd5b019080519060200190620000f492919062000163565b5080620001018162000432565b91505062000042565b50505062000470565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546200017190620003f5565b90600052602060002090601f016020900481019282620001955760008555620001e0565b82601f10620001b057805160ff1916838001178555620001e0565b82800160010185558215620001e0579182015b82811115620001e0578251825591602001919060010190620001c3565b50620001ee929150620001f2565b5090565b5b80821115620001ee5760008155600101620001f3565b6000601f83818401126200021b578182fd5b6200022562000397565b80848660a08701111562000237578485fd5b845b6005811015620002f45781516001600160401b03808211156200025a578788fd5b818901915089878301126200026d578788fd5b8151818111156200028257620002826200045a565b6020915062000299818901601f19168301620003c2565b8181528b83838601011115620002ad57898afd5b895b82811015620002cc578481018401518282018501528301620002af565b82811115620002dd578a8484840101525b508752509485019492909201915060010162000239565b50909695505050505050565b60008060c0838503121562000313578182fd5b83601f84011262000322578182fd5b6200032c62000397565b808460a08601878111156200033f578586fd5b855b60058110156200036257825185526020948501949092019160010162000341565b5051919450909150506001600160401b038111156200037f578182fd5b6200038d8582860162000209565b9150509250929050565b60405160a081016001600160401b0381118282101715620003bc57620003bc6200045a565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620003ed57620003ed6200045a565b604052919050565b600181811c908216806200040a57607f821691505b602082108114156200042c57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156200045357634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b610b0e80620004806000396000f3fe608060405234801561001057600080fd5b506004361061008e5760003560e01c80634a6d0f20146100935780636a1805e2146100a8578063715018a6146100bb57806376034ca9146100c35780638da5cb5b146100e95780638ebc87c314610109578063a323d45614610129578063bc2095161461013c578063cdeba6221461014f578063f2fde38b14610162575b600080fd5b6100a66100a13660046108a2565b610175565b005b6100a66100b6366004610809565b61022d565b6100a6610285565b6100d66100d13660046108dd565b6102c0565b6040519081526020015b60405180910390f35b6100f16102d7565b6040516001600160a01b0390911681526020016100e0565b61011c6101173660046108dd565b6102e6565b6040516100e091906109a2565b61011c6101373660046107bf565b610386565b61011c61014a3660046107e0565b61039f565b6100a661015d366004610887565b610574565b6100a66101703660046107bf565b610609565b3361017e6102d7565b6001600160a01b0316146101ad5760405162461bcd60e51b81526004016101a4906109f5565b60405180910390fd5b60005b6005811015610229578181600581106101d957634e487b7160e01b600052603260045260246000fd5b6020028101906101e99190610a2a565b6007836005811061020a57634e487b7160e01b600052603260045260246000fd5b610216939101916106f9565b508061022181610ab1565b9150506101b0565b5050565b336102366102d7565b6001600160a01b03161461025c5760405162461bcd60e51b81526004016101a4906109f5565b6001600160a01b038316600090815260016020526040902061027f9083836106f9565b50505050565b3361028e6102d7565b6001600160a01b0316146102b45760405162461bcd60e51b81526004016101a4906109f5565b6102be60006106a9565b565b600281600581106102d057600080fd5b0154905081565b6000546001600160a01b031690565b600781600581106102f657600080fd5b01805490915061030590610a76565b80601f016020809104026020016040519081016040528092919081815260200182805461033190610a76565b801561037e5780601f106103535761010080835404028352916020019161037e565b820191906000526020600020905b81548152906001019060200180831161036157829003601f168201915b505050505081565b6001602052600090815260409020805461030590610a76565b606060005b600581101561056c57600281600581106103ce57634e487b7160e01b600052603260045260246000fd5b0154831261055a576001600160a01b038416600090815260016020526040812080546103f990610a76565b80601f016020809104026020016040519081016040528092919081815260200182805461042590610a76565b80156104725780601f1061044757610100808354040283529160200191610472565b820191906000526020600020905b81548152906001019060200180831161045557829003601f168201915b505050505090508051600014156104f6576000805260016020527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49600783600581106104ce57634e487b7160e01b600052603260045260246000fd5b016040516020016104e092919061098d565b6040516020818303038152906040529250610553565b6001600160a01b03851660009081526001602052604090206007836005811061052f57634e487b7160e01b600052603260045260246000fd5b0160405160200161054192919061098d565b60405160208183030381529060405292505b505061056e565b8061056481610ab1565b9150506103a4565b505b92915050565b3361057d6102d7565b6001600160a01b0316146105a35760405162461bcd60e51b81526004016101a4906109f5565b60005b6005811015610229578181600581106105cf57634e487b7160e01b600052603260045260246000fd5b6020020135600282600581106105f557634e487b7160e01b600052603260045260246000fd5b01558061060181610ab1565b9150506105a6565b336106126102d7565b6001600160a01b0316146106385760405162461bcd60e51b81526004016101a4906109f5565b6001600160a01b03811661069d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016101a4565b6106a6816106a9565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b82805461070590610a76565b90600052602060002090601f016020900481019282610727576000855561076d565b82601f106107405782800160ff1982351617855561076d565b8280016001018555821561076d579182015b8281111561076d578235825591602001919060010190610752565b5061077992915061077d565b5090565b5b80821115610779576000815560010161077e565b80356001600160a01b03811681146107a957600080fd5b919050565b8060a0810183101561056e57600080fd5b6000602082840312156107d0578081fd5b6107d982610792565b9392505050565b600080604083850312156107f2578081fd5b6107fb83610792565b946020939093013593505050565b60008060006040848603121561081d578081fd5b61082684610792565b9250602084013567ffffffffffffffff80821115610842578283fd5b818601915086601f830112610855578283fd5b813581811115610863578384fd5b876020828501011115610874578384fd5b6020830194508093505050509250925092565b600060a08284031215610898578081fd5b6107d983836107ae565b6000602082840312156108b3578081fd5b813567ffffffffffffffff8111156108c9578182fd5b6108d5848285016107ae565b949350505050565b6000602082840312156108ee578081fd5b5035919050565b8054600090600181811c908083168061090f57607f831692505b602080841082141561092f57634e487b7160e01b86526022600452602486fd5b818015610943576001811461095457610981565b60ff19861689528489019650610981565b60008881526020902060005b868110156109795781548b820152908501908301610960565b505084890196505b50505050505092915050565b60006108d561099c83866108f5565b846108f5565b6000602080835283518082850152825b818110156109ce578581018301518582016040015282016109b2565b818111156109df5783604083870101525b50601f01601f1916929092016040019392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000808335601e19843603018112610a40578283fd5b83018035915067ffffffffffffffff821115610a5a578283fd5b602001915036819003821315610a6f57600080fd5b9250929050565b600181811c90821680610a8a57607f821691505b60208210811415610aab57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415610ad157634e487b7160e01b81526011600452602481fd5b506001019056fea2646970667358221220748f3107e7778de7bca73e560e06883a6785a5bb4d219676f98bff7868c48e7164736f6c63430008040033";
