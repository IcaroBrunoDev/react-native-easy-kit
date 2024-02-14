import React, {
  useCallback,
  useRef,
  useState,
  type FC,
  type PropsWithChildren,
  useMemo,
} from 'react';
import { Animated, LayoutAnimation, Platform, UIManager } from 'react-native';

import Text from '../Typography/Components/Text';

import { useTheme } from '../../config';

import {
  AccordionRetracted,
  ArrowWrapper,
  ExpandedWrapper,
  Wrapper,
} from './styles';

import type { AccordionProps } from './Models';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Accordion: FC<PropsWithChildren<AccordionProps>> = ({
  title,
  Icon,
  style,
  color,
  rounded,
  children,
  labelColor,
}) => {
  const { colors } = useTheme();

  const arrowAnimation = useRef(new Animated.Value(0)).current;
  const expandedAnimation = useRef(new Animated.Value(0)).current;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { textStyles, wrapperStyles } = useMemo(() => {
    const { primary, white } = colors;

    const text = { color: labelColor ?? white };

    const wrapper = {
      borderRadius: rounded ? 8 : 0,
      backgroundColor: color ?? primary,
    };

    return {
      textStyles: text,
      wrapperStyles: wrapper,
    };
  }, [labelColor, rounded, colors, color]);

  const expandAccordion = useCallback(
    (expandedStatus: boolean) => {
      const toValue = expandedStatus ? 1 : 0;

      Animated.parallel([
        Animated.timing(arrowAnimation, {
          toValue,
          duration: 350,
          useNativeDriver: false,
        }),
        Animated.timing(expandedAnimation, {
          toValue,
          duration: 350,
          useNativeDriver: false,
        }),
      ]).start();

      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

      setIsExpanded(expandedStatus);
    },
    [arrowAnimation, expandedAnimation]
  );

  return (
    <Wrapper
      style={[wrapperStyles, style]}
      onPress={() => expandAccordion(!isExpanded)}
    >
      <AccordionRetracted>
        <Text style={textStyles}>{title}</Text>
        {Icon && title.length < 50 && (
          <AnimatedArrow
            style={{
              transform: [
                {
                  rotate: arrowAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '180deg'],
                  }),
                },
              ],
            }}
          >
            {Icon}
          </AnimatedArrow>
        )}
      </AccordionRetracted>

      <AccordionExpanded
        style={{
          opacity: expandedAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
          padding: expandedAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 15],
          }),
          borderColor: colors.primary,
        }}
      >
        {isExpanded && children}
      </AccordionExpanded>
    </Wrapper>
  );
};

const AnimatedArrow = Animated.createAnimatedComponent(ArrowWrapper);

const AccordionExpanded = Animated.createAnimatedComponent(ExpandedWrapper);

export default Accordion;
