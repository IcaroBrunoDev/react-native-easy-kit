import { useTheme } from '../config';
import type { Styles } from '../models';
import type { BaseVariants } from '../theme/Models';

const useVariant = () => {
  const { variants } = useTheme();

  const apply = (styles: Styles, variant: BaseVariants) => {
    const pickedVariant = variants[variant];

    if (pickedVariant && Reflect.ownKeys(pickedVariant).length) {
      for (const style in pickedVariant) {
        styles = { ...styles, [style]: pickedVariant[style] };
      }
    }

    return styles;
  };

  return { apply };
};

export default useVariant;
