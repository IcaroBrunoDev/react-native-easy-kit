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
            <TitleWrapper>{title && <Title>{title}</Title>}</TitleWrapper>
            <CloseIconWrapper onPress={onClose}>
              <CloseIcon onPress={onClose} />
            </CloseIconWrapper>
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
  elevation: 2,
  maxHeight: 300,
  paddingVertical: '$6',
  paddingHorizontal: '$4',
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

const CloseIconWrapper = styled('Pressable', {
  width: 50,
  height: 30,
  justifyContent: 'center',
  alignItems: 'flex-end',
});

export const TitleWrapper = styled('View', {
  flexGrow: 1,
});

export default ActionSheet;
