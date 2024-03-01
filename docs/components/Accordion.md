# `<Accordion />`

Accordion is an animated component that shows and hides it's children when is pressed.

## Import

```ts
import { Accordion } from 'react-native-easy-kit';
```

## Usage

```ts
<Accordion
   title='Accordion Example'
   icon={<Icon ... />}
 >
   {children}
</Accordion>
```

## Accordion Props

| Prop       | Type        | Required | Default Value             | Description                                                                                             |
| ---------- | ----------- | -------- | ------------------------- | ------------------------------------------------------------------------------------------------------- |
| title      | `String`    | true     |                           | Accondion title. This title appears even if the accordion isn't expanded.                               |
| color      | `String`    | false    |                           | Apply a custom color as `backgroundColor`. It doesn't change the `borderColor` property.                |
| style      | `Styles`    | false    |                           | [`Styles`](docs/Types.md)                                                                               |
| icon       | `ReactNode` | true     |                           | Accordion Expansible Icon. This Icon spins down and up when the component opens and close respectively. |
| rounded    | `Boolean`   | false    | false                     | Apply `borderRadius: 8` and force borders to get more rounded.                                          |
| labelColor | `String`    | false    | [`$white`](docs/Theme.md) | Apply a custom color in the `title` element.                                                            |
| children   | `ReactNode` | false    |                           | Accordion children.                                                                                     |

## Types

```ts
interface AccordionProps {
  title: string;
  color?: string;
  style?: Styles;
  loading?: boolean;
  rounded?: boolean;
  variant?: string;
  outlined?: boolean;
  children: ReactNode;
}
```
