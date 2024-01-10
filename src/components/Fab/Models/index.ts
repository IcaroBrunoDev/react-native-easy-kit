import type { ReactNode } from 'react';

/**
 * @interface FabProps
 */
export interface FabProps {
  /**
   * Fab Button Icon
   * @type {ReactNode}
   */
  Icon: ReactNode;

  /**
   * OnPress Fab Action
   *
   * @function onPress
   *
   * @param args @type {any} Could be anything, even nothing.
   *
   * @returns {Promise<any> | any} Could be anything, even void.
   */
  onPress: (...args: any) => Promise<any> | any;
}
