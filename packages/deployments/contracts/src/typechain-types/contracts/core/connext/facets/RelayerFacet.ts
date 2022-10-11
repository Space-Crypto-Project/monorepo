/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface RelayerFacetInterface extends utils.Interface {
  functions: {
    "addRelayer(address)": FunctionFragment;
    "approvedRelayers(address)": FunctionFragment;
    "relayerFeeVault()": FunctionFragment;
    "removeRelayer(address)": FunctionFragment;
    "setRelayerFeeVault(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addRelayer"
      | "approvedRelayers"
      | "relayerFeeVault"
      | "removeRelayer"
      | "setRelayerFeeVault"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addRelayer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "approvedRelayers",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "relayerFeeVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeRelayer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRelayerFeeVault",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "addRelayer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approvedRelayers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "relayerFeeVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeRelayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRelayerFeeVault",
    data: BytesLike
  ): Result;

  events: {
    "Claimed(address,uint256,bytes32[])": EventFragment;
    "InitiatedClaim(uint32,address,address,bytes32[])": EventFragment;
    "RelayerAdded(address,address)": EventFragment;
    "RelayerFeeVaultUpdated(address,address,address)": EventFragment;
    "RelayerRemoved(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InitiatedClaim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RelayerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RelayerFeeVaultUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RelayerRemoved"): EventFragment;
}

export interface ClaimedEventObject {
  recipient: string;
  total: BigNumber;
  transferIds: string[];
}
export type ClaimedEvent = TypedEvent<
  [string, BigNumber, string[]],
  ClaimedEventObject
>;

export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;

export interface InitiatedClaimEventObject {
  domain: number;
  recipient: string;
  caller: string;
  transferIds: string[];
}
export type InitiatedClaimEvent = TypedEvent<
  [number, string, string, string[]],
  InitiatedClaimEventObject
>;

export type InitiatedClaimEventFilter = TypedEventFilter<InitiatedClaimEvent>;

export interface RelayerAddedEventObject {
  relayer: string;
  caller: string;
}
export type RelayerAddedEvent = TypedEvent<
  [string, string],
  RelayerAddedEventObject
>;

export type RelayerAddedEventFilter = TypedEventFilter<RelayerAddedEvent>;

export interface RelayerFeeVaultUpdatedEventObject {
  oldVault: string;
  newVault: string;
  caller: string;
}
export type RelayerFeeVaultUpdatedEvent = TypedEvent<
  [string, string, string],
  RelayerFeeVaultUpdatedEventObject
>;

export type RelayerFeeVaultUpdatedEventFilter =
  TypedEventFilter<RelayerFeeVaultUpdatedEvent>;

export interface RelayerRemovedEventObject {
  relayer: string;
  caller: string;
}
export type RelayerRemovedEvent = TypedEvent<
  [string, string],
  RelayerRemovedEventObject
>;

export type RelayerRemovedEventFilter = TypedEventFilter<RelayerRemovedEvent>;

export interface RelayerFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RelayerFacetInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addRelayer(
      _relayer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    approvedRelayers(
      _relayer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    relayerFeeVault(overrides?: CallOverrides): Promise<[string]>;

    removeRelayer(
      _relayer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRelayerFeeVault(
      _relayerFeeVault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addRelayer(
    _relayer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  approvedRelayers(
    _relayer: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  relayerFeeVault(overrides?: CallOverrides): Promise<string>;

  removeRelayer(
    _relayer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRelayerFeeVault(
    _relayerFeeVault: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addRelayer(
      _relayer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    approvedRelayers(
      _relayer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    relayerFeeVault(overrides?: CallOverrides): Promise<string>;

    removeRelayer(
      _relayer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRelayerFeeVault(
      _relayerFeeVault: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Claimed(address,uint256,bytes32[])"(
      recipient?: PromiseOrValue<string> | null,
      total?: null,
      transferIds?: null
    ): ClaimedEventFilter;
    Claimed(
      recipient?: PromiseOrValue<string> | null,
      total?: null,
      transferIds?: null
    ): ClaimedEventFilter;

    "InitiatedClaim(uint32,address,address,bytes32[])"(
      domain?: PromiseOrValue<BigNumberish> | null,
      recipient?: PromiseOrValue<string> | null,
      caller?: null,
      transferIds?: null
    ): InitiatedClaimEventFilter;
    InitiatedClaim(
      domain?: PromiseOrValue<BigNumberish> | null,
      recipient?: PromiseOrValue<string> | null,
      caller?: null,
      transferIds?: null
    ): InitiatedClaimEventFilter;

    "RelayerAdded(address,address)"(
      relayer?: null,
      caller?: null
    ): RelayerAddedEventFilter;
    RelayerAdded(relayer?: null, caller?: null): RelayerAddedEventFilter;

    "RelayerFeeVaultUpdated(address,address,address)"(
      oldVault?: null,
      newVault?: null,
      caller?: null
    ): RelayerFeeVaultUpdatedEventFilter;
    RelayerFeeVaultUpdated(
      oldVault?: null,
      newVault?: null,
      caller?: null
    ): RelayerFeeVaultUpdatedEventFilter;

    "RelayerRemoved(address,address)"(
      relayer?: null,
      caller?: null
    ): RelayerRemovedEventFilter;
    RelayerRemoved(relayer?: null, caller?: null): RelayerRemovedEventFilter;
  };

  estimateGas: {
    addRelayer(
      _relayer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    approvedRelayers(
      _relayer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    relayerFeeVault(overrides?: CallOverrides): Promise<BigNumber>;

    removeRelayer(
      _relayer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRelayerFeeVault(
      _relayerFeeVault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addRelayer(
      _relayer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    approvedRelayers(
      _relayer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    relayerFeeVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeRelayer(
      _relayer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRelayerFeeVault(
      _relayerFeeVault: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}