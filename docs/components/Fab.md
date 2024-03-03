# `<Fab />`

Fab (Float action Button) is a floating button with custom placement (top – bottom). Often used when you need an action button over components.

## Import

```ts
import { Fab } from 'react-native-easy-kit';
```

## Usage

```ts
<Fab icon={<MaterialIcons name="add" />} onPress={onPressCallback} />
```

## FabProps

| Prop     | Type                             | Required | Default Value               | Description                                         |
| -------- | -------------------------------- | -------- | --------------------------- | --------------------------------------------------- |
| icon     | `ReactNode`                      | true     |                             | Fab icon .                                          |
| color    | `String`                         | false    | [`$primary`](docs/Theme.md) | Background color. Does not apply color to the icon. |
| position | `Positions`                      | false    | `bottom`                    | Placement value.                                    |
| variant  | `String`                         | false    |                             | Fab variant scheme.                                 |
| onPress  | [`PropsFunction`](docs/Types.md) | true     |                             | Action callback.                                    |

## Types

```ts
type Positions = 'top' | 'bottom' | 'top-inverted' | 'bottom-inverted';
```

```ts
interface FabProps extends TouchableOpacityProps {
  icon: ReactNode;
  color?: string;
  style?: Styles;
  position?: Positions;
  variant?: string;
  onPress: PropsFunction;
}
```
