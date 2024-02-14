import { styled } from '../../config';

export const Wrapper = styled('View', {
  top: 0,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'absolute',
  justifyContent: 'space-between',
  paddingVertical: 20,
  paddingHorizontal: 10,
  elevation: 2,
});

export const ArrowWrapper = styled('View', {
  flexGrow: 0,
});

export const TitleWrapper = styled('View', {
  flexGrow: 1,
  alignItems: 'center',
  marginRight: 20,
});
