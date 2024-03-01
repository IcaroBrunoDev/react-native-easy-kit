# extendTheme

This hook merge/overwrite the default theme with the a new given theme.

## About

This hook is the core of the Themification system, it has the responsability for merge the `default kit theme` with a new providen theme.

It is required when you need to expand or even create from scratch a new theme.

## How to useTheme

First, lets create a dedicated file, which has the responsability to export your custom themes and types.

This structure can't be the ideal for your application, but don't worry, you can structure your themes as you want.

```
- src/
  - themes/
    - index.(ts | js)
```

Now, inside `themes/index`, lets create our first theme and called it as `light`

```ts
import { extendTheme } from 'react-native-easy-kit';

export const theme = extendTheme({
  colors: {
    primary: 'MY_PRIMARY_COLOR',
  },
});
```

To finish it off, import your new theme into `KitProvider` context

```ts
import { light } from 'themes';

const App = () => {
  return <KitProvider theme={theme}>...</KitProvider>;
};
```

## Type Enforcing

When you extend the default theme, is possible to create new values that doesn't exist in the easy theme as default. When you do that, you can leverage the power of type-responsiviness to inform to your `useTheme` hook the new theme values, let's see how it works in the example below:

First, lets create a custom variant called `myCustomVariant` and store the result of merging in the `theme` variable.

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

Then we can declare a new type of `Theme` using the `theme` values itself:

```ts
... code above

export type Theme = keyof theme
```

Now, when you use the `useTheme` hook, pass the generic `Theme`

```ts
import type { Theme } from 'path/to/theme';

const { variants } = useTheme<Theme>();
```

Now when you use the `variants` the IDE will suggest your `myCustomVariant` value.

## Multiple themes

To create a new theme is simple, you can do:

```ts
export const dark = extendTheme({
    colors : {
        primary: "MY_DARK_COLOR"
        ...
    }
    ...
})
```

After that, you need to export your theme to the `KitProvider` as the example above. To get a better undestanding about how you can change between themes, read the `KitProvider` documentation.

## Types

```ts
extendTheme = <T extends Theme>(extension: T): Theme & T
```
