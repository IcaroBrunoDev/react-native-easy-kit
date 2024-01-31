import { styled } from '../../../base.config';

export const Wrapper = styled('Pressable', {
  width: '100%',
  marginVertical: 10,
  marginHorizontal: 15,
  paddingVertical: 8,
  borderRadius: 5,
  borderWidth: 1,
  height: 'auto',
  overflow: 'hidden',
});

export const ExpandedWrapper = styled('View', {
  borderTopWidth: 0.4,
});

export const AccordionRetracted = styled('View', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: 10,
  paddingHorizontal: 20,
});

export const ArrowWrapper = styled('View', {
  marginLeft: 3,
});
