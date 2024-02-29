# `<Accordion />`

Accordion is an animated component that shows and hides it's children when you press it up.

## Import

```ts
import { Accordion } from 'react-native-easy-kit';
```

## Usage

```ts
<Accordion
   title='Accordion Example'
   icon={<Icon ... />}
   onPress={onPressCallback}
 >
   {children}
</Accordion>
```

## Accordion Props

| Prop       | Type            | Required          | Default Value | Description                                                                                                                                                                                          |
| ---------- | --------------- | ----------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| title      | `String`        | true              |               | Accondion title. This title appears even if the accordion is                                                                                                                                         |
| color      | `String`        | false             |               | Apply a custom color as `backgroundColor`. It doesn't change the `borderColor` property                                                                                                              |
| style      | `String`        | false             | {}            |                                                                                                                                                                                                      |
| loading    | `Boolean`       | false             | false         | Render the `` `<ActivityIndicator />` `` instead of `title` prop. By default the spinner color will be white, but `ghost` props can aplly `color` as spinner color if `color` props contains a value |
| rounded    | `Boolean`       | false             | false         | Apply `borderRadius: 8` and force borders to get more rounded                                                                                                                                        |
| labelColor | `String`        | false             |               | Apply a custom color in the `title` element                                                                                                                                                          |
| children   | ```ReactElement | ReactElement[]``` | true          |                                                                                                                                                                                                      | Accordion children |

## Types

```ts
interface ButtonProps {
  title: string;
  color?: string;
  style?: StyleProp<TextStyle>;
  loading?: boolean;
  rounded?: boolean;
  variant?: string;
  outlined?: boolean;
  onPress: (...args: any) => Promise<any> | any;
}
```
