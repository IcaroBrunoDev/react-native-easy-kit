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

| Prop     | Type           | Required | Default Value | Description              |
| -------- | -------------- | -------- | ------------- | ------------------------ |
| icon     | `ReactElement` | true     |               | Button icon              |
| color    | `String`       | false    | #00b4d8       | Custom color             |
| position | `Positions`    | false    | bottom        | Fab position             |
| variant  | `String`       | false    |               | Fab variant color scheme |

## Types

```ts
type Positions = 'top' | 'bottom' | 'top-inverted' | 'bottom-inverted';
```

```ts
type FabProps = {
  icon: ReactElement;
  color?: string;
  position?: Positions;
  style?: StyleProp<ViewStyle>;
  variant?: string;
  onPress: (...args: any) => Promise<any> | any;
};
```
