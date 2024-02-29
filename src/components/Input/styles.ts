import { styled } from '../../config';

export const Wrapper = styled('View', {
  maxHeight: 50,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderWidth: 0.4,
  borderRadius: 5,
  paddingHorizontal: 8,
  marginVertical: 8,
  backgroundColor: 'transparent',
  borderColor: '$text',
});

export const TextInput = styled('TextInput', {
  flexGrow: 1,
  borderWidth: 0,
  color: '$text',
});
