# `<Button />`

Button is a Touchable Action Component. It behaves like a TouchableOpacity Component with custom default styles.

## Import

```ts
import { Button } from 'react-native-easy-kit';
```

## Usage

```ts
<Button title="Button Title" onPress={onPressCallback} />
```

## Button Props

| Prop     | Type | Required | Default Value | Description   |
| -------- | ---- | -------- | ------------- | ------------- |
| title    | `String` | true     |   | Button text  |
| color    | `String`                         | false    |               | Apply a custom color as `backgroundColor`, `title` color and `` `<ActivityIndicator />` `` spinner color. It doesn't change the `borderColor` property                                               |
| style    | `Styles`                         | false    |               | [`Styles`](docs/Types.md)                                                                                                                                                                            |     | Fab variant color scheme |
| loading  | `Boolean`                        | false    | false         | Render the `` `<ActivityIndicator />` `` instead of `title` prop. By default the spinner color will be white, but `ghost` props can aplly `color` as spinner color if `color` props contains a value |
| rounded  | `Boolean`                        | false    | false         | Apply `borderRadius: 100` and force borders to get rounded                                                                                                                                           |
| outlined | `Boolean`                        | false    | false         | Apply Ghost style on Button (apply transparent as backgroundColor value and set color value as borderColor and title color)                                                                          |
| variant  | `String`                         | false    |               | Apply the chosen variant styles on the button                                                                                                                                                        |
| onPress  | [`PropsFunction`](docs/Types.md) | true     |               | Action callback                                                                                                                                                                                      |

## Types

```ts
interface ButtonProps {
  title: string;
  color?: string;
  style?: Styles;
  loading?: boolean;
  rounded?: boolean;
  variant?: string;
  outlined?: boolean;
  onPress: PropsFunction;
}
```
