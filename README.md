# typescript-cast

Tired of interface casts not giving you the expected results? Here's a simple package that should resolve that.

For example:

```ts
interface MyInterface {
    myProperty: number;
}

const x = JSON.parse("{ myProperty: \"100\" }");
```

Beginners to Typescript might expect that `x.myProperty` would be a `number` with `100` as its value, but this is incorrect; it's actually a `string` with `"100"` as its value.
One hack around this is to use `reinterpret_cast`, which this package provides:

```ts
import reinterpret_cast from "typescript-cast";

interface MyInterface {
    myProperty: number;
}

const x = reinterpret_cast<MyInterface>(JSON.parse("{ myProperty: \"100\" }"), { myProperty: "number" });
```

The second parameter to reinterpret_cast is a list of properties and what type they should be coerced into. Currently, only `number` and `Date` are supported.
