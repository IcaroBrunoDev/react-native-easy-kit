import type { StyleProp, TextStyle } from 'react-native';

/**
 * @interface ButtonProps
 */
export interface ButtonProps {
  /**
   * Button Text
   * @type {string}
   */
  title: string;

  /**
   * Button Color (Overwrites the theme color)
   * @type {string}
   */
  color?: string;

  /**
   * Apply Ghost effect on the Button (Transparent Background)
   * @type {boolean}
   */
  ghost?: boolean;

  /**
   * Apply/Overwrite the button styles
   * @type {StyleProp<TextStyle>}
   */
  style?: StyleProp<TextStyle>;

  /**
   * Control Loading Render
   * @type {boolean}
   */
  loading?: boolean;

  /**
   * Control borderRaduis style on the Button
   * @type {boolean}
   */
  rounded?: boolean;

  /**
   * Control outline effect (Transparent background with borders)
   * @type {boolean}
   */
  outlined?: boolean;

  /**
   * OnPress Button Action
   *
   * @function onPress
   *
   * @param args @type {any} Could be anything, even nothing.
   *
   * @returns {Promise<any> | any} Could be anything, even void.
   */
  onPress: (...args: any) => Promise<any> | any;
}
