import React, { type FC } from 'react';

import { Modal } from 'react-native';
import { styled } from '../../../config';
import { Title } from '../../Typography';
import type { ActionSheetProps } from '../Models';

import CloseIcon from '../../../assets/icons/Close';

const ActionSheet: FC<ActionSheetProps> = ({
  title,
  visible,
  onClose,
  children,
}) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent={true}
      onRequestClose={onClose}
    >
      <Wrapper>
        <SheetSkeleton>
          <SheetHeader>
            {title && <Title>{title}</Title>}
            <CloseIcon onPress={onClose} />
          </SheetHeader>
          {children}
        </SheetSkeleton>
      </Wrapper>
    </Modal>
  );
};

export const Wrapper = styled('View', {
  flex: 1,
  justifyContent: 'flex-end',
});

export const SheetSkeleton = styled('View', {
  paddingVertical: '$6',
  paddingHorizontal: '$3',
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
  backgroundColor: '$white',
});

export const SheetHeader = styled('View', {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$3',
});

export default ActionSheet;
