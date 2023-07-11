# echo

this is echo

## Install

```bash
npm install echo
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`openMap(...)`](#openmap)
* [`getForceUpgrade(...)`](#getforceupgrade)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### openMap(...)

```typescript
openMap(options: OpenMapOptions) => Promise<void>
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#openmapoptions">OpenMapOptions</a></code> |

--------------------


### getForceUpgrade(...)

```typescript
getForceUpgrade(filter: string) => Promise<{ results: any; }>
```

| Param        | Type                |
| ------------ | ------------------- |
| **`filter`** | <code>string</code> |

**Returns:** <code>Promise&lt;{ results: any; }&gt;</code>

--------------------


### Interfaces


#### OpenMapOptions

| Prop            | Type                |
| --------------- | ------------------- |
| **`latitude`**  | <code>number</code> |
| **`longitude`** | <code>number</code> |

</docgen-api>
