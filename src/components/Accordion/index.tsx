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

  /**
   * Function that will be called everytime that
   * the Pressable area is pressed. This function is responsible for
   * handle thw Animated effect, creating a parallel effect that will
   * change @constant arrowAnimation and @constant expandedAnimation values.
   *
   * @function expandAccordion @returns {void}
   *
   * Expanded status shoud be the opposite of itself previous value
   * @param expandedStatus @type {boolean}
   *
   */
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

      /**
       * Apply an Animated effect right after the Animation above starts
       * that will create a smooth transition to the element that will appears
       * when expandedStatus is true.
       */

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
        {title.length < 50 && (
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
