/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Version0,
  Version0Interface,
} from "../../../../contracts/nomad-core/contracts/Version0";

const _abi = [
  {
    inputs: [],
    name: "VERSION",
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
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060808061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063ffa1ad7414602d575b600080fd5b6034600081565b60405160ff909116815260200160405180910390f3fea264697066735822122054aa4a89258a31e3e00acb35488b200c2c120ad4dab02be0f8c90712de28fb4464736f6c634300080b0033";

type Version0ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Version0ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Version0__factory extends ContractFactory {
  constructor(...args: Version0ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Version0> {
    return super.deploy(overrides || {}) as Promise<Version0>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Version0 {
    return super.attach(address) as Version0;
  }
  override connect(signer: Signer): Version0__factory {
    return super.connect(signer) as Version0__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Version0Interface {
    return new utils.Interface(_abi) as Version0Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Version0 {
    return new Contract(address, _abi, signerOrProvider) as Version0;
  }
}