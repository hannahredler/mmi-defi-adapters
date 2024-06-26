[@metamask-institutional/defi-adapters](../README.md) / [adapter](../modules/adapter.md) / Underlying

# Interface: Underlying

[adapter](../modules/adapter.md).Underlying

Underlying token balances of a position
The underlying token may be a simple erc20 such as Dai.
Should the underlying token be another protocol token then we expect that to be resolved down into the underlying simple erc20 tokens

## Hierarchy

- [`TokenBalance`](adapter.TokenBalance.md)

  ↳ **`Underlying`**

## Table of contents

### Properties

- [balanceRaw](adapter.Underlying.md#balanceraw)
- [type](adapter.Underlying.md#type)
- [priceRaw](adapter.Underlying.md#priceraw)
- [tokens](adapter.Underlying.md#tokens)
- [address](adapter.Underlying.md#address)
- [name](adapter.Underlying.md#name)
- [symbol](adapter.Underlying.md#symbol)
- [decimals](adapter.Underlying.md#decimals)

## Properties

### balanceRaw

• **balanceRaw**: `bigint`

User's balance raw

#### Inherited from

[TokenBalance](adapter.TokenBalance.md).[balanceRaw](adapter.TokenBalance.md#balanceraw)

#### Defined in

[src/types/adapter.ts:188](https://github.com/consensys-vertical-apps/mmi-defi-adapters/blob/main/src/types/adapter.ts#L188)

___

### type

• **type**: ``"underlying"`` \| ``"underlying-claimable"``

#### Defined in

[src/types/adapter.ts:197](https://github.com/consensys-vertical-apps/mmi-defi-adapters/blob/main/src/types/adapter.ts#L197)

___

### priceRaw

• `Optional` **priceRaw**: `bigint`

#### Defined in

[src/types/adapter.ts:198](https://github.com/consensys-vertical-apps/mmi-defi-adapters/blob/main/src/types/adapter.ts#L198)

___

### tokens

• `Optional` **tokens**: [`Underlying`](adapter.Underlying.md)[]

#### Defined in

[src/types/adapter.ts:199](https://github.com/consensys-vertical-apps/mmi-defi-adapters/blob/main/src/types/adapter.ts#L199)

___

### address

• **address**: `string`

Token address

#### Inherited from

[TokenBalance](adapter.TokenBalance.md).[address](adapter.TokenBalance.md#address)

#### Defined in

[src/types/erc20Metadata.ts:5](https://github.com/consensys-vertical-apps/mmi-defi-adapters/blob/main/src/types/erc20Metadata.ts#L5)

___

### name

• **name**: `string`

Name of token

#### Inherited from

[TokenBalance](adapter.TokenBalance.md).[name](adapter.TokenBalance.md#name)

#### Defined in

[src/types/erc20Metadata.ts:10](https://github.com/consensys-vertical-apps/mmi-defi-adapters/blob/main/src/types/erc20Metadata.ts#L10)

___

### symbol

• **symbol**: `string`

Token symbol

#### Inherited from

[TokenBalance](adapter.TokenBalance.md).[symbol](adapter.TokenBalance.md#symbol)

#### Defined in

[src/types/erc20Metadata.ts:15](https://github.com/consensys-vertical-apps/mmi-defi-adapters/blob/main/src/types/erc20Metadata.ts#L15)

___

### decimals

• **decimals**: `number`

Token decimals

#### Inherited from

[TokenBalance](adapter.TokenBalance.md).[decimals](adapter.TokenBalance.md#decimals)

#### Defined in

[src/types/erc20Metadata.ts:20](https://github.com/consensys-vertical-apps/mmi-defi-adapters/blob/main/src/types/erc20Metadata.ts#L20)
