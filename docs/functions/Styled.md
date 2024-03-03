# `styled`

`styled` is a component generator.

## About

The `styled` function create a new React Native component with a custom style provided by you. Also this function applies the tokenization process, parsing a string value from your `Theme`
to an actual value.

## How to use

Begin by importing the `styled` function.

```ts
import { styled } from 'react-native-easy-kit';
```

Before move forward, let's understand more about the `styled` structure:

The `styled` function receives:

- An `element` string, which refers to a `React Native Element` or a `React.NamedExoticComponent`, which refers to a `React Element`.
- A `Style` object.

Once you understand what `styled` expects, let's create a simple example component based on the `React Native View` element.

```ts
const View = styled('View', {
  backgroundColor: '#000',
});
```

That's it.

## Tokenization

Tokenization is a powerful resource that transform token strings into `styled` values, removing the complexity of import the `useTheme` hook to acess a `Theme` value.

To use the tokenization, you must refer to an existing value in your current `Theme` using the `$` prefix combined with the value name, for example, if you want to pass as token to a `backgroundColor` property the value `primary` of your `Theme` object, you just need to declare `$primary` as the `backgroundColor` value. Let's undersand better in the following exampe:

```ts
import { extendTheme, styled } from 'react-native-easy-kit';

const theme = extendTheme({
  colors: {
    primary: '#000',
  },
  fontSize: {
    sm: 12,
  },
});

const BackgroundView = styled('View', {
  backgroundColor: '$primary',
});

const Text = styled('Text', {
  fontSize: '$sm',
});
```

In this example, the resulting value when we use `$primary` and `$sm` tokens are respectively `#000` and `12`.

Note that the `styled` function search for the passed token value in the `Theme` object and, when it founds, return this value to the desired property.

## Extension

You can extend themes and inherit it's properties, such as Element Type and styles, either if it is a `styled` element or a custom component. Let's understand how it works in the following example:

```ts
import { styled } from 'react-native-easy-kit';

const Box = styled('View', {
  width: 100,
  height: 100,
  backgroundColor: '$red',
});

const BlackBox = styled(Box, {
  backgroundColor: '$black',
});
```

Now, the BlackBox component will inherit the `Box` properties and overwrite it's `backgroundColor` to `$black`.
