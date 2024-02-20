
# useTheme

```useTheme()```
 is a hook that allow you to use the current theme values, such as colors, variants and more.

## How it can be helpful?

When you are using the easy-kit, you may need to use the current theme in other component that easy-kit doesn’t control. In this case you can use useTheme hook to export the current theme values and use these values as style props as in the following example:

```ts  

import { useTheme } from 'react-native-easy-kit';

...

const MyComponent = () => {

 const theme = useTheme();
 
 ...

 return (
    <ExternalComponent style={{ backgroundColor: theme.colors.background }}> 
        ...
    </ExternalComponent>
 )

}

```

## Return Type

```ts
type Theme = CustomTheme & BaseTheme;

```
