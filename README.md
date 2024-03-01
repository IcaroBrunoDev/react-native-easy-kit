# React Native Easy Kit

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/icarobrunodev/)

Discover a React Native UI and styling tool designed by developers for developers

## Introduction

The React Native Easy kit was developed to unify the best of the world of UI components and styling tools in a fast, high-performance, and lightweight way, delivering easy-to-create functionalities and providing daily-use components with a high abstraction level to improve your development experience.

## About

The development of this library was inspired by the features of stitches/react and styled-components libraries. It aims to combine ready-made UI components with the capacity to create custom components/themes in one place.

You can quickly customize the ready-made components or create your own components with near-zero configuration. Also apply your own colors, spacing, variants and more. Besides, the ready-made components change when your theme change (responsiveness is the key here).

## Components

** More components comming soon... **

You can access the documentation for each of them below:

[`<Fab />`](docs/components/Fab.md)

[`<Input />`](docs/components/Input.md)

[`<Button />`](docs/components/Button.md)

[`<Accordion />`](docs/components/Accordion.md)

[`<Typography />`](docs/components/Typography.md)

## Functionalities

You can access the documentation for each of them below:

[`theme`](docs/functions/Theme.md)

[`useTheme()`](docs/functions/UseTheme.md)

[`extendTheme()`](docs/functions/ExtendTheme.md)

[`<KitProvider />`](docs/functions/KitProvider.md)

## Installation

The installation process is easy, if you’re using NPM, just run this command:

```ts
npm install react-native-easy-kit
```

Or if you’re using yarn, use the following command instead:

```ts
yarn add react-native-easy-kit
```

## Setup

The React Native Easy Kit is almost zero-configuration, everything that you need to start is already configured, but if you want to customize the default theme and add your own you need to follow the steps above or take a look at {doc} to understand more about custom theme creation and how to work with dark theme.

First, create your new theme using the `extendTheme()` function. It will return to you a custom theme object, which is a extension of the default theme. You can understand more how it works here.

```tsx
...

import { KitProvider, extendTheme } from 'react-native-easy-kit';

...

const theme = extendTheme({
  colors: {
    red: 'red',
    violet: 'violet',
  },
});
```

Then, wrap your components with the KitProvider Context. Note that you must pass the theme as property to the Context.

```tsx
...

export default function App() {
  return (
    <KitProvider theme={theme}>
      ...
    </KitProvider>
  );
}
```

## Developer Notes

This is the first version of this library, so you can expect more components and more functionalities as soon as I can make.

This library wasn’t made by a team (unless you consider one developer to be a team lol). This means that it could have failures and crash points, so feel free to collaborate with your PR.

Contributions that want to improve this library are welcome, you can DM me on my LinkedIn.

You can learn about the TODO's here

## License

[MIT](https://choosealicense.com/licenses/mit/)
