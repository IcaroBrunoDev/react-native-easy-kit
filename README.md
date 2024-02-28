# React Native Easy Kit

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/icarobrunodev/)

Discover a React Native UI and styling tool designed by developers for developers

## Introduction

The React Native Easy kit was developed to unify the best of the world of UI components and styling tools in a fast, high-performance, and lightweight way, delivering easy-to-create functionalities and providing daily-use components with a high abstraction level to improve your development experience.

## About

Development of this library was inspired by the features of Stitches library (also Styled-Components). This includes the easy way to create styled-components, the possibility to create and apply your own theme and use tokenizing to apply styles onto your components, and the ease of having pre-made components, such as Buttons and Typography with a low level of default styles.The goal was reducing the pain of customizing the library components and the necessity of combining two or more libraries that don’t talk to each other (we have all probably had to do that 😊).

This library aims to provide powerful functions that give you the power of css-in-js libraries, such as styled functions, themes, tokenizing and inherit styles, while providing daily-uses components ready to use. And as a result, improving your development time and reducing the necessity of spending hours configuring libraries and making them work.

This library wasn’t made by a team (unless you consider one developer to be a team lol). This means that it could have failures and crash points, so feel free to collaborate with your PR, and contributors that want to improve this library are welcome, just send me a DM in my LinkedIn above.

## Components

We have some ready-made components; you can check out the documentation for each one in the list below:

[`<Fab />`](docs/components/Fab.md)

[`<Button />`](docs/components/Button.md)

[`<Accordion />`](docs/components/Accordion.md)

[`<Typography />`](docs/components/Typography.md)

## Functionalities

The library includes some powerful functions, you can read the documentation for each one in the list below:

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

If you don’t want to customize the default theme, you don’t need to configure anything, just check out the Components/Functions documentation and have fun.

If you want to modify the default theme, you first need to understand how the themification works (put link here). After that, you can import the ThemeContext and use the extendTheme function to extend/overwrite the default theme as in the example below:

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

export default function App() {
  return (
    <KitProvider theme={theme}>
      ...
    </KitProvider>
  );
}


```

## Developer Notes

This is the first version of this library, so you can expect more components (Carousel, Modal, Tooltips) and more functionalities (compounds styles, variants, and support to fonts) to come.

Others todo`s are implementing tests and improving the CI/CD pipeline.

## License

[MIT](https://choosealicense.com/licenses/mit/)
