import React, { useCallback, useState, type FC } from 'react';

import { FlatList } from 'react-native';
import CaretArrowDown from '../../assets/icons/CaretDown';
import { ActionSheet } from '../ActionSheet';
import Input from '../Input';
import { Text } from '../Typography';
import type { PickerProps } from './Models';

const SelectPicker: FC<PickerProps> = ({
  title,
  options,
  selected,
  onSelect,
  ...props
}) => {
  const [visible, setIsVisible] = useState<boolean>(false);

  const onClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleItemSelection = (item) => {
    onSelect(item);
    onClose();
  };

  return (
    <>
      <Input
        {...props}
        value={selected?.text}
        editable={false}
        onPress={() => setIsVisible(true)}
        rightIcon={props?.rightIcon || <CaretArrowDown />}
      />

      <ActionSheet
        visible={visible}
        title={title || 'Escolha um valor'}
        onClose={() => setIsVisible(false)}
      >
        <FlatList
          data={options}
          showsVerticalScrollIndicator
          contentContainerStyle={{ maxHeight: 450 }}
          keyExtractor={(item, index) => `${item.text}-${index}`}
          renderItem={({ item }) => (
            <ActionSheet.Item onPress={() => handleItemSelection(item)}>
              <Text>{item.text}</Text>
            </ActionSheet.Item>
          )}
        />
      </ActionSheet>
    </>
  );
};

export default SelectPicker;
