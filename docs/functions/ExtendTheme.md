# extendTheme

This hook extends the [`Kit Theme`](docs/functions/Theme.md) object.

## About

This functions has the responsability to create a new [`Theme Object`](docs/functions/Theme.md) based on the [`Kit Theme`](docs/functions/Theme.md) and a provided new [`Theme Object`](docs/functions/Theme.md).

You can use this Hook to create custom themes in your application, either entirely overwriting the `Kit Theme` or creating a new `Theme Object` from scratch.

## How to use

First, import the `extendedTheme` hook

```ts
import { extendTheme } from 'react-native-easy-kit';
```

After that, you can create new theme following the example below:

```ts
/** Overwriting the primary color value */

import { extendTheme } from 'react-native-easy-kit';

const theme = extendTheme({
  colors: {
    primary: 'MY_PRIMARY_COLOR',
  },
});
```

Now, import your `theme` into the `KitProvider` Context:

```ts
import { theme } from 'path/to/theme';

const App = () => {
  return <KitProvider theme={theme}>...</KitProvider>;
};
```

That's it. You are now able to use the new `primary` color anywhere in your application.

Note that when you overwrite the `primary` color, every prebuilt component will be affected. It means that if your `primary` is `#000`, now every component that uses the `primary` color as `backgroundColor` for example, will receives `#000` as value.

To understand more about Theme overwriting and extension, take a look in the [`Theme`](docs/functions/Theme.md) documentation.

## Type Enforcing

When you extend the default theme, is possible to create new values that doesn't exist yet. When you do that, you can leverage the power of the `type-responsiviness` to inform to your `useTheme` hook the new theme values, as you can see in the following example:

```ts
import { extendTheme } from 'react-native-easy-kit';

export const theme = extendTheme({
    variants : {
        myCustomVariant : {
            padding: '$5'
            fontSize: '$xlg',
            backgroundColor: "CUSTOM_COLOR",
        }
    }
});
```

After create yout custom value, you must create a new `Type` that extends the `theme` values itself:

```ts
export type Theme = keyof theme;
```

You can now pass the `Theme` to the `useTheme` hook as a generic type, like this:

```ts
import type { Theme } from 'path/to/theme';

const { variants } = useTheme<Theme>();
```

## Multiple themes

The extendTheme was designed to work with multiples themes. Note that two `Themes` don't talk each other, and you can't provide to the `KitProvider` two themes at same time, but you can declare how many themes as you need and change between them as your needs.

To create a new theme, you can follow the same process above described in `How to use`.

```ts
const dark = extendTheme({
    colors : {
        primary: "MY_DARK_COLOR"
        ...
    }
    ...
})
```

To type enforce your new theme, follow the example below:

```ts
export type Theme = keyof theme & keyof dark;
```

**This is a experimental way to type enforce the second theme, if you have an improvment suggestion just let me know.**

## Types

```ts
extendTheme = <T extends Theme>(extension: T): Theme & T
```
