
# `<KitThemeProvider />`

```<KitThemeProvider />``` is a context that allow you to use and overwrite the existing theme in your application. 

## How to use

Frist, import the KitThemeProvider onto your App.js


```ts
...

import { KitThemeProvider } from 'react-native-easy-kit';

export const App = () =>  {

  ...

  return (
    <KitThemeProvider>
      ...your app logic here
    </KitThemeProvider>
  );
}
```

Then, create a new theme using the extendTheme (theme is required by KitThemeProvider)


```ts
...

import { KitThemeProvider, extendTheme } from 'react-native-easy-kit';

const newTheme = extendTheme({
  colors: {
    primary: '#F6F930',
  },
});

export const App = () =>  {

  ...

  return (
    <KitThemeProvider theme={newTheme}>
      ...your app logic here
    </KitThemeProvider>
  );
}
```
Finally, enjoy your new theme.


## Is it required?

No, it isn’t, except when you want to create a new theme or overwrite the default theme. When you use this Context, a theme must be passed as props, in this case you must have a theme created by extendTheme function.

Pass a theme that is not the result of extendTheme function is allowed and can also works, but not as you expect. The ``` extendTheme() ``` function behind the scenes format, combine and parse the tokenization, creating an understandable style object that further will be used in a component (read more here)

