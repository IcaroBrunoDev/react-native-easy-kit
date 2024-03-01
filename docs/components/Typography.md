# `<Typography />`

A text collection components.

## Import

```ts
import { Text, Title, Anchor } from 'react-native-easy-kit';
```

## Text Types

`<Text />` A text component with [`fontSize: $xs`](docs/Types.md) and [`color: $text`](docs/Types.md)

`<Title />` A text component with [`fontSize: $sm`](docs/Types.md), [`color: $text`](docs/Types.md) and `fontWeight: 600`

`<Anchor />` A pressable text component with same properties as `<Text />` and added up to `textDecorationLine: underline`

## Text Usage

```ts
<Text> Your Text Here </Text>
```

## Title Usage

```ts
<Title> Your Title Here </Title>
```

## Anchor Usage

```ts
<Anchor onPress={anchorCallback}> Your Anchor Text Here </Anchor>
```

## FabProps

| Prop     | Type                             | Required                 | Description       |
| -------- | -------------------------------- | ------------------------ | ----------------- |
| size     | `Number / String`                | false                    | `fontSize` value. |
| style    | `String`                         | false                    |                   |
| children | `Positions`                      | true                     | Placement value.  |
| onPress  | [`PropsFunction`](docs/Types.md) | Required in `<Anchor />` | Action callback.  |

## Types

```ts
type TypographyProps = {
  size?: string | number;
  style?: Styles;
  children: string;
};
```

```ts
interface AnchorProps extends TypographyProps {
  onPress: PropsFunction;
}
```
