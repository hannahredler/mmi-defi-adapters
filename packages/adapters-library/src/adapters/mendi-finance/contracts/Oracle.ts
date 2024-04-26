/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface OracleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "baseUnits"
      | "getPrice"
      | "getUnderlyingPrice"
      | "isPriceOracle"
      | "priceIds"
      | "pyth"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "baseUnits", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getPrice",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnderlyingPrice",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isPriceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "priceIds", values: [string]): string;
  encodeFunctionData(functionFragment: "pyth", values?: undefined): string;

  decodeFunctionResult(functionFragment: "baseUnits", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUnderlyingPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "priceIds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pyth", data: BytesLike): Result;
}

export interface Oracle extends BaseContract {
  connect(runner?: ContractRunner | null): Oracle;
  waitForDeployment(): Promise<this>;

  interface: OracleInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  baseUnits: TypedContractMethod<[arg0: string], [bigint], "view">;

  getPrice: TypedContractMethod<[cToken: AddressLike], [bigint], "view">;

  getUnderlyingPrice: TypedContractMethod<
    [cToken: AddressLike],
    [bigint],
    "view"
  >;

  isPriceOracle: TypedContractMethod<[], [boolean], "view">;

  priceIds: TypedContractMethod<[arg0: string], [string], "view">;

  pyth: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "baseUnits"
  ): TypedContractMethod<[arg0: string], [bigint], "view">;
  getFunction(
    nameOrSignature: "getPrice"
  ): TypedContractMethod<[cToken: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getUnderlyingPrice"
  ): TypedContractMethod<[cToken: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "isPriceOracle"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "priceIds"
  ): TypedContractMethod<[arg0: string], [string], "view">;
  getFunction(
    nameOrSignature: "pyth"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}