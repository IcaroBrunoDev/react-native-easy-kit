import { useCallback } from 'react';
import { useTheme } from '../config';
import type { BaseComponentStyle } from '../models';

const useVariants = () => {
  const { variants } = useTheme();

  const processVariants = useCallback(
    (styles: BaseComponentStyle, variant: string | undefined) => {
      if (variant) {
        const values = variants[variant];

        if (values && Reflect.ownKeys(values).length) {
          styles.general = { ...styles.general, ...(values as any) };
        }
      }

      return styles;
    },
    [variants]
  );

  return { processVariants };
};

export default useVariants;
