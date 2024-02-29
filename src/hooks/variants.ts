import { useTheme } from '../config';
import type { Styles } from '../models/styles';

const useVariant = () => {
  const { variants } = useTheme();

  const apply = (styles: Styles, variant: string) => {
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
