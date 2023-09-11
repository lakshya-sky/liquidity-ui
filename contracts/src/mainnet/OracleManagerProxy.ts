// !!! DO NOT EDIT !!! Automatically generated file

export const address = '0x0aaF300E148378489a8A471DD3e9E53E30cb42e3';
export const abi = [
  'error ImplementationIsSterile(address implementation)',
  'error NoChange()',
  'error NotAContract(address contr)',
  'error NotNominated(address addr)',
  'error Unauthorized(address addr)',
  'error UpgradeSimulationFailed()',
  'error ZeroAddress()',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'event Upgraded(address indexed self, address implementation)',
  'function acceptOwnership()',
  'function getImplementation() view returns (address)',
  'function nominateNewOwner(address newNominatedOwner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function renounceNomination()',
  'function simulateUpgradeTo(address newImplementation)',
  'function upgradeTo(address newImplementation)',
  'error DeviationToleranceExceeded(int256 deviation)',
  'error InvalidInputPrice()',
  'error InvalidNodeDefinition(tuple(uint8 nodeType, bytes parameters, bytes32[] parents) nodeType)',
  'error InvalidParameter(string parameter, string reason)',
  'error InvalidPrice(int256 price)',
  'error NodeNotRegistered(bytes32 nodeId)',
  'error OverflowInt256ToUint256()',
  'error OverflowInt56ToInt24()',
  'error OverflowUint256ToInt256()',
  'error OverflowUint256ToUint160()',
  'error OverflowUint56ToInt56()',
  'error StalenessToleranceExceeded()',
  'error UnprocessableNode(bytes32 nodeId)',
  'error UnsupportedOperation(uint8 operation)',
  'event NodeRegistered(bytes32 nodeId, uint8 nodeType, bytes parameters, bytes32[] parents)',
  'function getNode(bytes32 nodeId) pure returns (tuple(uint8 nodeType, bytes parameters, bytes32[] parents) node)',
  'function getNodeId(uint8 nodeType, bytes parameters, bytes32[] parents) pure returns (bytes32 nodeId)',
  'function process(bytes32 nodeId) view returns (tuple(int256 price, uint256 timestamp, uint256 __slotAvailableForFutureUse1, uint256 __slotAvailableForFutureUse2) node)',
  'function processWithRuntime(bytes32 nodeId, bytes32[] runtimeKeys, bytes32[] runtimeValues) view returns (tuple(int256 price, uint256 timestamp, uint256 __slotAvailableForFutureUse1, uint256 __slotAvailableForFutureUse2) node)',
  'function registerNode(uint8 nodeType, bytes parameters, bytes32[] parents) returns (bytes32 nodeId)',
];
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
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export declare namespace NodeDefinition {
  export type DataStruct = { nodeType: BigNumberish; parameters: BytesLike; parents: BytesLike[] };

  export type DataStructOutput = [number, string, string[]] & {
    nodeType: number;
    parameters: string;
    parents: string[];
  };
}

export declare namespace NodeOutput {
  export type DataStruct = {
    price: BigNumberish;
    timestamp: BigNumberish;
    __slotAvailableForFutureUse1: BigNumberish;
    __slotAvailableForFutureUse2: BigNumberish;
  };

  export type DataStructOutput = [BigNumber, BigNumber, BigNumber, BigNumber] & {
    price: BigNumber;
    timestamp: BigNumber;
    __slotAvailableForFutureUse1: BigNumber;
    __slotAvailableForFutureUse2: BigNumber;
  };
}

export interface OracleManagerProxyInterface extends utils.Interface {
  functions: {
    'acceptOwnership()': FunctionFragment;
    'getImplementation()': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceNomination()': FunctionFragment;
    'simulateUpgradeTo(address)': FunctionFragment;
    'upgradeTo(address)': FunctionFragment;
    'getNode(bytes32)': FunctionFragment;
    'getNodeId(uint8,bytes,bytes32[])': FunctionFragment;
    'process(bytes32)': FunctionFragment;
    'processWithRuntime(bytes32,bytes32[],bytes32[])': FunctionFragment;
    'registerNode(uint8,bytes,bytes32[])': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'acceptOwnership'
      | 'getImplementation'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'owner'
      | 'renounceNomination'
      | 'simulateUpgradeTo'
      | 'upgradeTo'
      | 'getNode'
      | 'getNodeId'
      | 'process'
      | 'processWithRuntime'
      | 'registerNode'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getImplementation', values?: undefined): string;
  encodeFunctionData(functionFragment: 'nominateNewOwner', values: [string]): string;
  encodeFunctionData(functionFragment: 'nominatedOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceNomination', values?: undefined): string;
  encodeFunctionData(functionFragment: 'simulateUpgradeTo', values: [string]): string;
  encodeFunctionData(functionFragment: 'upgradeTo', values: [string]): string;
  encodeFunctionData(functionFragment: 'getNode', values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: 'getNodeId',
    values: [BigNumberish, BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: 'process', values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: 'processWithRuntime',
    values: [BytesLike, BytesLike[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: 'registerNode',
    values: [BigNumberish, BytesLike, BytesLike[]]
  ): string;

  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getImplementation', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceNomination', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'simulateUpgradeTo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'upgradeTo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getNode', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getNodeId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'process', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'processWithRuntime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'registerNode', data: BytesLike): Result;

  events: {
    'OwnerChanged(address,address)': EventFragment;
    'OwnerNominated(address)': EventFragment;
    'Upgraded(address,address)': EventFragment;
    'NodeRegistered(bytes32,uint8,bytes,bytes32[])': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerNominated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Upgraded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'NodeRegistered'): EventFragment;
}

export interface OwnerChangedEventObject {
  oldOwner: string;
  newOwner: string;
}
export type OwnerChangedEvent = TypedEvent<[string, string], OwnerChangedEventObject>;

export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;

export interface OwnerNominatedEventObject {
  newOwner: string;
}
export type OwnerNominatedEvent = TypedEvent<[string], OwnerNominatedEventObject>;

export type OwnerNominatedEventFilter = TypedEventFilter<OwnerNominatedEvent>;

export interface UpgradedEventObject {
  self: string;
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string, string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface NodeRegisteredEventObject {
  nodeId: string;
  nodeType: number;
  parameters: string;
  parents: string[];
}
export type NodeRegisteredEvent = TypedEvent<
  [string, number, string, string[]],
  NodeRegisteredEventObject
>;

export type NodeRegisteredEventFilter = TypedEventFilter<NodeRegisteredEvent>;

export interface OracleManagerProxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OracleManagerProxyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptOwnership(overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

    getImplementation(overrides?: CallOverrides): Promise<[string]>;

    nominateNewOwner(
      newNominatedOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceNomination(overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

    simulateUpgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getNode(
      nodeId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[NodeDefinition.DataStructOutput] & { node: NodeDefinition.DataStructOutput }>;

    getNodeId(
      nodeType: BigNumberish,
      parameters: BytesLike,
      parents: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[string] & { nodeId: string }>;

    process(
      nodeId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[NodeOutput.DataStructOutput] & { node: NodeOutput.DataStructOutput }>;

    processWithRuntime(
      nodeId: BytesLike,
      runtimeKeys: BytesLike[],
      runtimeValues: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[NodeOutput.DataStructOutput] & { node: NodeOutput.DataStructOutput }>;

    registerNode(
      nodeType: BigNumberish,
      parameters: BytesLike,
      parents: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

  getImplementation(overrides?: CallOverrides): Promise<string>;

  nominateNewOwner(
    newNominatedOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceNomination(overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

  simulateUpgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getNode(nodeId: BytesLike, overrides?: CallOverrides): Promise<NodeDefinition.DataStructOutput>;

  getNodeId(
    nodeType: BigNumberish,
    parameters: BytesLike,
    parents: BytesLike[],
    overrides?: CallOverrides
  ): Promise<string>;

  process(nodeId: BytesLike, overrides?: CallOverrides): Promise<NodeOutput.DataStructOutput>;

  processWithRuntime(
    nodeId: BytesLike,
    runtimeKeys: BytesLike[],
    runtimeValues: BytesLike[],
    overrides?: CallOverrides
  ): Promise<NodeOutput.DataStructOutput>;

  registerNode(
    nodeType: BigNumberish,
    parameters: BytesLike,
    parents: BytesLike[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    getImplementation(overrides?: CallOverrides): Promise<string>;

    nominateNewOwner(newNominatedOwner: string, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceNomination(overrides?: CallOverrides): Promise<void>;

    simulateUpgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;

    upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;

    getNode(nodeId: BytesLike, overrides?: CallOverrides): Promise<NodeDefinition.DataStructOutput>;

    getNodeId(
      nodeType: BigNumberish,
      parameters: BytesLike,
      parents: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string>;

    process(nodeId: BytesLike, overrides?: CallOverrides): Promise<NodeOutput.DataStructOutput>;

    processWithRuntime(
      nodeId: BytesLike,
      runtimeKeys: BytesLike[],
      runtimeValues: BytesLike[],
      overrides?: CallOverrides
    ): Promise<NodeOutput.DataStructOutput>;

    registerNode(
      nodeType: BigNumberish,
      parameters: BytesLike,
      parents: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    'OwnerChanged(address,address)'(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    'OwnerNominated(address)'(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;

    'Upgraded(address,address)'(self?: string | null, implementation?: null): UpgradedEventFilter;
    Upgraded(self?: string | null, implementation?: null): UpgradedEventFilter;

    'NodeRegistered(bytes32,uint8,bytes,bytes32[])'(
      nodeId?: null,
      nodeType?: null,
      parameters?: null,
      parents?: null
    ): NodeRegisteredEventFilter;
    NodeRegistered(
      nodeId?: null,
      nodeType?: null,
      parameters?: null,
      parents?: null
    ): NodeRegisteredEventFilter;
  };

  estimateGas: {
    acceptOwnership(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    getImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(
      newNominatedOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceNomination(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    simulateUpgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getNode(nodeId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getNodeId(
      nodeType: BigNumberish,
      parameters: BytesLike,
      parents: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    process(nodeId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    processWithRuntime(
      nodeId: BytesLike,
      runtimeKeys: BytesLike[],
      runtimeValues: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerNode(
      nodeType: BigNumberish,
      parameters: BytesLike,
      parents: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(overrides?: Overrides & { from?: string }): Promise<PopulatedTransaction>;

    getImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nominateNewOwner(
      newNominatedOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceNomination(overrides?: Overrides & { from?: string }): Promise<PopulatedTransaction>;

    simulateUpgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getNode(nodeId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNodeId(
      nodeType: BigNumberish,
      parameters: BytesLike,
      parents: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    process(nodeId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    processWithRuntime(
      nodeId: BytesLike,
      runtimeKeys: BytesLike[],
      runtimeValues: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerNode(
      nodeType: BigNumberish,
      parameters: BytesLike,
      parents: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
