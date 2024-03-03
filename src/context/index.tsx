import React, {
  createContext,
  createElement,
  forwardRef,
  memo,
  useContext,
} from 'react';

import * as Native from 'react-native';

import { generateStyles, mergeThemes } from '../utils';

import type { ElementStyles, Elements } from '../models';
import type { Styles } from '../models/styles';
import type { KitTheme } from '../theme';
import type { Provider, Theme } from '../theme/Models';

type Composition<T> = Omit<T, 'style'> & ElementStyles & { [P in any]: any };

type StyledComponent<
  T extends keyof Elements | React.NamedExoticComponent<any>
> = T extends keyof Elements
  ? React.NamedExoticComponent<Composition<Elements[T]>>
  : T;

const createKitTheme = (defaultTheme: KitTheme) => {
  const ThemeContext = createContext(defaultTheme);

  /**
   *
   * @param param0
   * @returns
   */
  const KitProvider = ({ theme, children }: Provider) => {
    return (
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
  };

  /**
   * useTheme Hook
   *
   * Returns the current theme object
   *
   * @returns {Theme & T}
   */
  const useTheme = <T extends Theme>(): KitTheme & T =>
    useContext(ThemeContext) as KitTheme & T;

  /**
   *
   * @param extension
   * @returns {Theme & T}
   */
  const extendTheme = <T extends Theme>(extension: T): KitTheme & T =>
    mergeThemes(defaultTheme, extension);

  /**
   *
   * @param element
   * @param styles
   * @returns
   */
  const styled = <T extends keyof Elements | React.NamedExoticComponent<any>>(
    Element: T,
    styles?: Styles | Styles[]
  ) => {
    /**
     * TODO
     * props type definition
     */

    const Component = forwardRef((props: any, ref) => {
      const theme = useTheme();

      const style = generateStyles(props.style, styles, theme);

      const rest = { ...props, style, ref };

      if (typeof Element === 'object') return <Element {...rest} />;

      return createElement(Native[Element as string], rest);
    });

    return memo(Component) as unknown as StyledComponent<T>;
  };

  return {
    theme: defaultTheme,
    styled,
    useTheme,
    extendTheme,
    KitProvider,
  };
};

export default createKitTheme;
