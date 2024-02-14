import { styled } from '../../config';

export const Wrapper = styled('Pressable', {
  height: 'auto',
  overflow: 'hidden',
  marginVertical: 10,
  paddingVertical: 8,
  marginHorizontal: 5,
});

export const ExpandedWrapper = styled('View', {
  borderTopWidth: 0.4,
});

export const AccordionRetracted = styled('View', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingVertical: 10,
  paddingHorizontal: 20,
});

export const ArrowWrapper = styled('View', {
  marginLeft: 3,
});
