import type { InputProps } from '../../Input/Models';

type PickerOption = {
  text: string;
  value: any;
};

type PickerProps = {
  title?: string;
  options: PickerOption[];
  selected: PickerOption | undefined;
  onSelect: (selectedItem: PickerOption) => void;
} & Omit<InputProps, 'children' | 'style'>;

export type { PickerOption, PickerProps };
