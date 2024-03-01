import type { PropsFunction } from '../../../models';
import type { Styles } from '../../../models/styles';

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
   * Apply/Overwrite the button styles
   * @type {Styles}
   */
  style?: Styles;

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
   *
   */

  variant?: string;

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
  onPress: PropsFunction;
}
