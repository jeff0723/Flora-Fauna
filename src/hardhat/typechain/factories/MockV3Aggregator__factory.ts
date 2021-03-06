/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockV3Aggregator } from "../MockV3Aggregator";

export class MockV3Aggregator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _decimals: BigNumberish,
    _initialAnswer: BigNumberish,
    overrides?: Overrides
  ): Promise<MockV3Aggregator> {
    return super.deploy(
      _decimals,
      _initialAnswer,
      overrides || {}
    ) as Promise<MockV3Aggregator>;
  }
  getDeployTransaction(
    _decimals: BigNumberish,
    _initialAnswer: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _decimals,
      _initialAnswer,
      overrides || {}
    );
  }
  attach(address: string): MockV3Aggregator {
    return super.attach(address) as MockV3Aggregator;
  }
  connect(signer: Signer): MockV3Aggregator__factory {
    return super.connect(signer) as MockV3Aggregator__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockV3Aggregator {
    return new Contract(address, _abi, signerOrProvider) as MockV3Aggregator;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        internalType: "int256",
        name: "_initialAnswer",
        type: "int256",
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
        internalType: "int256",
        name: "current",
        type: "int256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
    ],
    name: "AnswerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "startedBy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
    ],
    name: "NewRound",
    type: "event",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
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
    name: "getAnswer",
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
        internalType: "uint80",
        name: "_roundId",
        type: "uint80",
      },
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
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
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestAnswer",
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
    inputs: [],
    name: "latestRound",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "_answer",
        type: "int256",
      },
    ],
    name: "updateAnswer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "_roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "_answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startedAt",
        type: "uint256",
      },
    ],
    name: "updateRoundData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161052c38038061052c83398101604081905261002f916100a4565b6000805460ff191660ff84161790556100478161004e565b50506100fd565b60018190554260025560038054906000610067836100d6565b9091555050600380546000908152600460209081526040808320949094558254825260058152838220429081905592548252600690529190912055565b600080604083850312156100b6578182fd5b825160ff811681146100c6578283fd5b6020939093015192949293505050565b60006000198214156100f657634e487b7160e01b81526011600452602481fd5b5060010190565b6104208061010c6000396000f3fe608060405234801561001057600080fd5b50600436106100a45760003560e01c8063313ce567146100a95780634aa2011f146100cd57806350d25bcd1461012757806354fd4d501461013e578063668a0f02146101465780637284e4161461014f5780638205bf6a1461018e5780639a6fc8f514610197578063a87a20ce1461020f578063b5ab58dc14610222578063b633620c14610242578063feaf968c14610262575b600080fd5b6000546100b69060ff1681565b60405160ff90911681526020015b60405180910390f35b6101256100db366004610338565b6001600160501b0390931660038181556001849055600283905560009182526004602090815260408084209590955581548352600581528483209390935554815260069091522055565b005b61013060015481565b6040519081526020016100c4565b610130600081565b61013060035481565b604080518082018252601f81527f76302e382f74657374732f4d6f636b563341676772656761746f722e736f6c00602082015290516100c49190610370565b61013060025481565b6101db6101a5366004610317565b6001600160501b038116600090815260046020908152604080832054600683528184205460059093529220549293919290918490565b604080516001600160501b03968716815260208101959095528401929092526060830152909116608082015260a0016100c4565b61012561021d3660046102ff565b61028d565b6101306102303660046102ff565b60046020526000908152604090205481565b6101306102503660046102ff565b60056020526000908152604090205481565b60035460008181526004602090815260408083205460068352818420546005909352922054836101db565b600181905542600255600380549060006102a6836103c3565b9091555050600380546000908152600460209081526040808320949094558254825260058152838220429081905592548252600690529190912055565b80356001600160501b03811681146102fa57600080fd5b919050565b600060208284031215610310578081fd5b5035919050565b600060208284031215610328578081fd5b610331826102e3565b9392505050565b6000806000806080858703121561034d578283fd5b610356856102e3565b966020860135965060408601359560600135945092505050565b6000602080835283518082850152825b8181101561039c57858101830151858201604001528201610380565b818111156103ad5783604083870101525b50601f01601f1916929092016040019392505050565b60006000198214156103e357634e487b7160e01b81526011600452602481fd5b506001019056fea26469706673582212209e5decbcef463301de593d849efa74143db8cf9efca69dc6f981db3dc22f397464736f6c63430008040033";
