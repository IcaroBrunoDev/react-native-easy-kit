import type { ReactNode } from 'react';

/**
 * @interface HeaderProps
 */
export interface HeaderProps {
  /**
   * Navbar middle text
   * @type {string}
   */
  text?: string;

  /**
   * Navbar Left Icon (It`s usually a chevron-left),
   * But can be anything else, even an other React Component.
   * Depending on the component that you will use here,
   * unexpected behavior can be observed.
   *
   * @type {ReactNode}
   */
  NavIcon: ReactNode;

  /**
   * OnPress Icon Action
   *
   * @param args @type {any} Could be anything, even nothing.
   *
   * @returns {Promise<any> | any} Could be anything, even void.
   */
  onIconPress?: (...args: any) => Promise<any> | any;
}
