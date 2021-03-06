/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface BattleBaseInterface extends ethers.utils.Interface {
  functions: {
    "expand(uint256)": FunctionFragment;
    "faunaArmy()": FunctionFragment;
    "faunaConquer(uint256,uint256)": FunctionFragment;
    "faunaFieldCount()": FunctionFragment;
    "faunaOnField(uint256)": FunctionFragment;
    "fieldDefender(uint256,uint256)": FunctionFragment;
    "fieldLocked()": FunctionFragment;
    "floraArmy()": FunctionFragment;
    "floraConquer(uint256,uint256)": FunctionFragment;
    "floraFieldCount()": FunctionFragment;
    "floraOnField(uint256)": FunctionFragment;
    "getFieldDefender(uint256)": FunctionFragment;
    "getFieldInfo(uint256)": FunctionFragment;
    "getFieldLeader(uint256)": FunctionFragment;
    "getRangeInfo(uint256,uint256)": FunctionFragment;
    "isFloraField(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "retreat(uint256)": FunctionFragment;
    "totalArea()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "expand",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "faunaArmy", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "faunaConquer",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "faunaFieldCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "faunaOnField",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fieldDefender",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fieldLocked",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "floraArmy", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "floraConquer",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "floraFieldCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "floraOnField",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFieldDefender",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFieldInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFieldLeader",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRangeInfo",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isFloraField",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "retreat",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "totalArea", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "expand", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "faunaArmy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "faunaConquer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "faunaFieldCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "faunaOnField",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fieldDefender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fieldLocked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "floraArmy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "floraConquer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "floraFieldCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "floraOnField",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFieldDefender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFieldInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFieldLeader",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRangeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isFloraField",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "retreat", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalArea", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "FieldState(uint256,address,bool,uint256[])": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TotalArea(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FieldState"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TotalArea"): EventFragment;
}

export class BattleBase extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BattleBaseInterface;

  functions: {
    expand(
      increaseSize: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "expand(uint256)"(
      increaseSize: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    faunaArmy(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "faunaArmy()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    faunaConquer(
      fieldID: BigNumberish,
      attackerID: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "faunaConquer(uint256,uint256)"(
      fieldID: BigNumberish,
      attackerID: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    faunaFieldCount(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "faunaFieldCount()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    faunaOnField(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "faunaOnField(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    fieldDefender(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "fieldDefender(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    fieldLocked(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    "fieldLocked()"(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    floraArmy(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "floraArmy()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    floraConquer(
      fieldID: BigNumberish,
      attackerID: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "floraConquer(uint256,uint256)"(
      fieldID: BigNumberish,
      attackerID: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    floraFieldCount(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "floraFieldCount()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    floraOnField(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "floraOnField(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    getFieldDefender(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    "getFieldDefender(uint256)"(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    getFieldInfo(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      fieldInfo: {
        leader: string;
        defender: BigNumber[];
        isFlora: boolean;
        0: string;
        1: BigNumber[];
        2: boolean;
      };
      0: {
        leader: string;
        defender: BigNumber[];
        isFlora: boolean;
        0: string;
        1: BigNumber[];
        2: boolean;
      };
    }>;

    "getFieldInfo(uint256)"(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      fieldInfo: {
        leader: string;
        defender: BigNumber[];
        isFlora: boolean;
        0: string;
        1: BigNumber[];
        2: boolean;
      };
      0: {
        leader: string;
        defender: BigNumber[];
        isFlora: boolean;
        0: string;
        1: BigNumber[];
        2: boolean;
      };
    }>;

    getFieldLeader(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getFieldLeader(uint256)"(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getRangeInfo(
      startId: BigNumberish,
      area: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      rangeInfo: {
        leader: string;
        defender: BigNumber[];
        isFlora: boolean;
        0: string;
        1: BigNumber[];
        2: boolean;
      }[];
      0: {
        leader: string;
        defender: BigNumber[];
        isFlora: boolean;
        0: string;
        1: BigNumber[];
        2: boolean;
      }[];
    }>;

    "getRangeInfo(uint256,uint256)"(
      startId: BigNumberish,
      area: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      rangeInfo: {
        leader: string;
        defender: BigNumber[];
        isFlora: boolean;
        0: string;
        1: BigNumber[];
        2: boolean;
      }[];
      0: {
        leader: string;
        defender: BigNumber[];
        isFlora: boolean;
        0: string;
        1: BigNumber[];
        2: boolean;
      }[];
    }>;

    isFloraField(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isFloraField(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    owner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "owner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    retreat(
      fieldID: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "retreat(uint256)"(
      fieldID: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    totalArea(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "totalArea()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  expand(
    increaseSize: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "expand(uint256)"(
    increaseSize: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  faunaArmy(overrides?: CallOverrides): Promise<string>;

  "faunaArmy()"(overrides?: CallOverrides): Promise<string>;

  faunaConquer(
    fieldID: BigNumberish,
    attackerID: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "faunaConquer(uint256,uint256)"(
    fieldID: BigNumberish,
    attackerID: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  faunaFieldCount(overrides?: CallOverrides): Promise<BigNumber>;

  "faunaFieldCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  faunaOnField(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  "faunaOnField(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  fieldDefender(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "fieldDefender(uint256,uint256)"(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  fieldLocked(overrides?: CallOverrides): Promise<boolean>;

  "fieldLocked()"(overrides?: CallOverrides): Promise<boolean>;

  floraArmy(overrides?: CallOverrides): Promise<string>;

  "floraArmy()"(overrides?: CallOverrides): Promise<string>;

  floraConquer(
    fieldID: BigNumberish,
    attackerID: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "floraConquer(uint256,uint256)"(
    fieldID: BigNumberish,
    attackerID: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  floraFieldCount(overrides?: CallOverrides): Promise<BigNumber>;

  "floraFieldCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  floraOnField(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  "floraOnField(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getFieldDefender(
    fieldID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getFieldDefender(uint256)"(
    fieldID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getFieldInfo(
    fieldID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    leader: string;
    defender: BigNumber[];
    isFlora: boolean;
    0: string;
    1: BigNumber[];
    2: boolean;
  }>;

  "getFieldInfo(uint256)"(
    fieldID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    leader: string;
    defender: BigNumber[];
    isFlora: boolean;
    0: string;
    1: BigNumber[];
    2: boolean;
  }>;

  getFieldLeader(
    fieldID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getFieldLeader(uint256)"(
    fieldID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRangeInfo(
    startId: BigNumberish,
    area: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    {
      leader: string;
      defender: BigNumber[];
      isFlora: boolean;
      0: string;
      1: BigNumber[];
      2: boolean;
    }[]
  >;

  "getRangeInfo(uint256,uint256)"(
    startId: BigNumberish,
    area: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    {
      leader: string;
      defender: BigNumber[];
      isFlora: boolean;
      0: string;
      1: BigNumber[];
      2: boolean;
    }[]
  >;

  isFloraField(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  "isFloraField(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  retreat(
    fieldID: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "retreat(uint256)"(
    fieldID: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  totalArea(overrides?: CallOverrides): Promise<BigNumber>;

  "totalArea()"(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    expand(
      increaseSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "expand(uint256)"(
      increaseSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    faunaArmy(overrides?: CallOverrides): Promise<string>;

    "faunaArmy()"(overrides?: CallOverrides): Promise<string>;

    faunaConquer(
      fieldID: BigNumberish,
      attackerID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "faunaConquer(uint256,uint256)"(
      fieldID: BigNumberish,
      attackerID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    faunaFieldCount(overrides?: CallOverrides): Promise<BigNumber>;

    "faunaFieldCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    faunaOnField(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "faunaOnField(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    fieldDefender(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fieldDefender(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fieldLocked(overrides?: CallOverrides): Promise<boolean>;

    "fieldLocked()"(overrides?: CallOverrides): Promise<boolean>;

    floraArmy(overrides?: CallOverrides): Promise<string>;

    "floraArmy()"(overrides?: CallOverrides): Promise<string>;

    floraConquer(
      fieldID: BigNumberish,
      attackerID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "floraConquer(uint256,uint256)"(
      fieldID: BigNumberish,
      attackerID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    floraFieldCount(overrides?: CallOverrides): Promise<BigNumber>;

    "floraFieldCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    floraOnField(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "floraOnField(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getFieldDefender(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getFieldDefender(uint256)"(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getFieldInfo(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      leader: string;
      defender: BigNumber[];
      isFlora: boolean;
      0: string;
      1: BigNumber[];
      2: boolean;
    }>;

    "getFieldInfo(uint256)"(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      leader: string;
      defender: BigNumber[];
      isFlora: boolean;
      0: string;
      1: BigNumber[];
      2: boolean;
    }>;

    getFieldLeader(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getFieldLeader(uint256)"(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRangeInfo(
      startId: BigNumberish,
      area: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      {
        leader: string;
        defender: BigNumber[];
        isFlora: boolean;
        0: string;
        1: BigNumber[];
        2: boolean;
      }[]
    >;

    "getRangeInfo(uint256,uint256)"(
      startId: BigNumberish,
      area: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      {
        leader: string;
        defender: BigNumber[];
        isFlora: boolean;
        0: string;
        1: BigNumber[];
        2: boolean;
      }[]
    >;

    isFloraField(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isFloraField(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    retreat(fieldID: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "retreat(uint256)"(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    totalArea(overrides?: CallOverrides): Promise<BigNumber>;

    "totalArea()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    FieldState(
      fieldID: BigNumberish | null,
      conqueror: string | null,
      isGreen: boolean | null,
      defender: null
    ): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    TotalArea(totalArea: null): EventFilter;
  };

  estimateGas: {
    expand(
      increaseSize: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "expand(uint256)"(
      increaseSize: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    faunaArmy(overrides?: CallOverrides): Promise<BigNumber>;

    "faunaArmy()"(overrides?: CallOverrides): Promise<BigNumber>;

    faunaConquer(
      fieldID: BigNumberish,
      attackerID: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "faunaConquer(uint256,uint256)"(
      fieldID: BigNumberish,
      attackerID: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    faunaFieldCount(overrides?: CallOverrides): Promise<BigNumber>;

    "faunaFieldCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    faunaOnField(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "faunaOnField(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fieldDefender(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fieldDefender(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fieldLocked(overrides?: CallOverrides): Promise<BigNumber>;

    "fieldLocked()"(overrides?: CallOverrides): Promise<BigNumber>;

    floraArmy(overrides?: CallOverrides): Promise<BigNumber>;

    "floraArmy()"(overrides?: CallOverrides): Promise<BigNumber>;

    floraConquer(
      fieldID: BigNumberish,
      attackerID: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "floraConquer(uint256,uint256)"(
      fieldID: BigNumberish,
      attackerID: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    floraFieldCount(overrides?: CallOverrides): Promise<BigNumber>;

    "floraFieldCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    floraOnField(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "floraOnField(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFieldDefender(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getFieldDefender(uint256)"(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFieldInfo(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getFieldInfo(uint256)"(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFieldLeader(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getFieldLeader(uint256)"(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRangeInfo(
      startId: BigNumberish,
      area: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRangeInfo(uint256,uint256)"(
      startId: BigNumberish,
      area: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isFloraField(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isFloraField(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    retreat(fieldID: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "retreat(uint256)"(
      fieldID: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    totalArea(overrides?: CallOverrides): Promise<BigNumber>;

    "totalArea()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    expand(
      increaseSize: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "expand(uint256)"(
      increaseSize: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    faunaArmy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "faunaArmy()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    faunaConquer(
      fieldID: BigNumberish,
      attackerID: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "faunaConquer(uint256,uint256)"(
      fieldID: BigNumberish,
      attackerID: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    faunaFieldCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "faunaFieldCount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    faunaOnField(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "faunaOnField(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fieldDefender(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "fieldDefender(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fieldLocked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "fieldLocked()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    floraArmy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "floraArmy()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    floraConquer(
      fieldID: BigNumberish,
      attackerID: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "floraConquer(uint256,uint256)"(
      fieldID: BigNumberish,
      attackerID: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    floraFieldCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "floraFieldCount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    floraOnField(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "floraOnField(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFieldDefender(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getFieldDefender(uint256)"(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFieldInfo(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getFieldInfo(uint256)"(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFieldLeader(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getFieldLeader(uint256)"(
      fieldID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRangeInfo(
      startId: BigNumberish,
      area: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRangeInfo(uint256,uint256)"(
      startId: BigNumberish,
      area: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isFloraField(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isFloraField(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    retreat(
      fieldID: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "retreat(uint256)"(
      fieldID: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    totalArea(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalArea()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
