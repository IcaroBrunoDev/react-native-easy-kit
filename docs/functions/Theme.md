# Theme

Theme is an object that contains all the `Default Theme` properties, such as `colors`, `variants` and more.

## About

The React Native Easy Kit has at its core a default theme that exports to you (and to the ready-made components) a series of properties (we'll see all straight ahead). Each property has a responsibility, for example, the `colors` property owns all the `Theme` colors, including the defaults like `primary`, `secondary` and more.

Different from others tools like styled-components, the Easy Kit already has a ready-to-use theme, combining the concepts of how a UI KIT works with the themification functionality of the `CSS-IN-JS` tools.

That's why you can start to use this package without worry about which `colors`, `spacing`, `fontSize` or variants you must create in your project. The default theme has a serie of defaults that will help you to save your time.

But if you don't feel happy with the `Default Theme` you can customize it, let's check it out.

## How Can I Create My Own Theme

The concept of theme creation here is simple, either you can create your new theme from the scratch, extend values of the default theme or just overwrite few values of the default theme.

### Extending a Theme

To extend a theme you just need to use the `extendTheme` hook and pass to it the values that you want to apply to the `Default Theme`, let's check how you can do that:

```ts
const theme = extendTheme({
    variants: {
        customVariant : {...custom variant values}
    }
})
```

The `Default Theme` now has a new `Variant` value ready for use. You can also create new properties, as in the following e.g,

```ts
const theme = extendTheme({
  myCustomProperty: {
    palettes: {
      primary: {
        100: '100',
        200: '200',
      },
    },
  },
});
```

In this case the `Default Theme` now has a new property ready for use.

```ts
const {
  myCustomProperty: { palettes },
} = useTheme<Theme>();

return <Component style={{ backgroundColor: palettes.primary['100'] }} />;
```

### Overwriting a Theme

To overwrite a `Default Theme` value is simple, just overwrite the same property with a other value, for example, if you want to change the `colors` property `$primary: #00b4d8`:

```ts
const theme = extendTheme({
  colors: {
    primary: 'CUSTOM_COLOR',
  },
});
```

You can overwrite the whole theme if you want, just read more about `Default Theme` below to understand it's composition.

## Default Theme

### Colors

| Color      | Hex                                                              |
| ---------- | ---------------------------------------------------------------- |
| primary    | ![#00b4d8](https://via.placeholder.com/10/00b4d8?text=+) #00b4d8 |
| secondary  | ![#6247AA](https://via.placeholder.com/10/6247AA?text=+) #6247AA |
| tertiary   | ![#D8572A](https://via.placeholder.com/10/D8572A?text=+) #D8572A |
| dark       | ![#4a4e69](https://via.placeholder.com/10/4a4e69?text=+) #4a4e69 |
| rose       | ![#F87575](https://via.placeholder.com/10/F87575?text=+) #F87575 |
| strong     | ![#780116](https://via.placeholder.com/10/780116?text=+) #780116 |
| background | ![#FeFeFe](https://via.placeholder.com/10/fefefe?text=+) #FeFeFe |
| danger     | ![#d00000](https://via.placeholder.com/10/d00000?text=+) #d00000 |
| warning    | ![#ffaa00](https://via.placeholder.com/10/ffaa00?text=+) #ffaa00 |
| success    | ![#55a630](https://via.placeholder.com/10/55a630?text=+) #55a630 |
| text       | ![#353535](https://via.placeholder.com/10/353535?text=+) #353535 |

## Variants

| variant name | color    | border color | background color |
| ------------ | -------- | ------------ | ---------------- |
| success      | `$white` | `$white`     | `$success`       |
| danger       | `$white` | `$white`     | `$danger`        |
| dark         | `$white` | `$dark`      | `$background`    |
