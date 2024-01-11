import { styled } from '../../../stitches.config';

export const Wrapper = styled('View', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: 20,
  paddingHorizontal: 10,
});

export const ArrowWrapper = styled('View', {
  flexGrow: 0,
});

export const TitleWrapper = styled('View', {
  flexGrow: 1,
  alignItems: 'center',
  marginRight: 20,
});
