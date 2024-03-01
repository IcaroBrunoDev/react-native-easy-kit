# `<KitProvider />`

This context allows you to change the global theme value.

## How to use

First, import the KitProvider into your App.js

```ts
...

import { KitProvider } from 'react-native-easy-kit';

export const App = () =>  {

  ...

  return (
    <KitProvider>
      ...your app logic here
    </KitProvider>
  );
}
```

Then, pass your new theme as property into the `KitProvider` Context

```ts
...
import { newTheme } from 'path/to/theme'
import { KitProvider } from 'react-native-easy-kit';

export const App = () =>  {
  return (
    <KitProvider theme={newTheme}>
      ...
    </KitProvider>
  );
}
```

That's it!

# Multiple themes

Change between themes is not a hard task, but requires some previous knowledge about `Dark Theme` and `Theme`.

Once you have read and understood how to create a `Dark Theme`, you need to define a trigger to change between your themes. Here I'll use the device colorScheme, it recognizes the current device colorScheme and return to us if the client is on `light` or `dark` mode. Let's see more in the snippet below:

```ts
import { light, dark } from 'path/to/theme';
import { useColorScheme } from 'react-native';

const App = () => {
  const colorScheme = useColorScheme();

  const theme = colorScheme === 'dark' ? dark : light;

  return <KitProvider theme={theme}>...</KitProvider>;
};
```

Now, every time that the `useColorScheme` hook detects that the device colorScheme has changed, my current theme will changes too, applying a different theme. You can change between infinite themes, don't forget to adjust your logic as your needs.

# Types

```ts
const KitProvider: ({ theme, children }: Provider) => JSX.Element;
```
