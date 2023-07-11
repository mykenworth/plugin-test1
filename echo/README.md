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


### Interfaces


#### OpenMapOptions

| Prop            | Type                |
| --------------- | ------------------- |
| **`latitude`**  | <code>number</code> |
| **`longitude`** | <code>number</code> |

</docgen-api>
