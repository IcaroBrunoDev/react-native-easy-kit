# useTheme

This hook returns to you to use the current theme values, such as colors, spacing, variants and more.

## About

Work with theme can be a hard job most part of the time, it's common to work with structures that doesn't have a good and fast way to access the Theme values, and things get worse when you don't know what type has on it (in this scenario, even the IDE autocomplete doesn't work well).

To handle with that, the Easy Kit count on the useTheme hook. This hook allow you to access the entire theme object and use it's values. This value refers to the current theme, it means that if you extended the default theme, you can access it straight

To use the hook is simple, let's check it out below:

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
