# extendTheme

This hook merge/overwrite the default theme with the a new given theme.

## About

This hook is the core of the Themification system, it has the responsability for merge the `default kit theme` with a new providen theme.

It is required when you need to expand or even create from scratch a new theme. Here I gonna show you how to use this hook and the good practices when use it.

## Good practices

When we are working with themes, is common to have two or more themes like light and dark. When we are talking about Software Architeture, is a bad practice to put all things thogether, so, in this example, I'll share the responsability of theming between folder, I higly recomment to put your themes in a folder called `themes/`, like

```
- src/
  - themes/
    - index.ts

```

```ts

import { useTheme } from 'react-native-easy-kit';

...

const MyComponent = () => {

 const theme = useTheme();

 ...

 return (
    <Component style={{ backgroundColor: theme.colors.background }}>
        ...
    </Component>
 )

}
```

Now my `<Component />` has the current theme `background` value.

You can also simplify this code:

```ts
const { colors } = useTheme();

return (
  <Component style={{ backgroundColor: colors.background }}>...</Component>
);
```

This Hook is `type-responsive`, it means that you can `type-enforce` it returns. First you need to have done the definition of your theme Type, if you haven't done yet, take a look at the [`Theme Documentation`](docs/Theme.md) before you go.

Once it's done, you can enforce the current theme type like the e.g below:

```ts
import type { Theme } from 'path/to/theme';
import { useTheme } from 'react-native-easy-kit';

const MyComponent = () => {
  const { colors } = useTheme<Theme>();

  return (
    <Component style={{ backgroundColor: colors.background }}>...</Component>
  );
};
```

## Types

```ts
useTheme = <T extends Theme>(): KitTheme & T
```
