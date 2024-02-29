import type { Styles } from '../../../models/styles';
import type { fonts } from '../../../theme/fonts';

export type TypographyProps = {
  size?: keyof typeof fonts | number;

  style?: Styles;

  children: string;
};

export interface AnchorProps extends TypographyProps {
  onPress: (...args: any) => Promise<any> | any;
}
