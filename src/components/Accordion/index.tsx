import React, {
  memo,
  useCallback,
  useRef,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';
import { Animated, LayoutAnimation, Platform, UIManager } from 'react-native';

import Text from '../Typography/Components/Text';

import { useTheme } from '../../../stitches.config';

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
  children,
}) => {
  const { colors } = useTheme();

  const arrowAnimation = useRef(new Animated.Value(0)).current;
  const expandedAnimation = useRef(new Animated.Value(0)).current;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

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
      style={{ backgroundColor: colors.mainColor }}
      onPress={() => expandAccordion(!isExpanded)}
    >
      <AccordionRetracted>
        <Text style={{ fontSize: 14, fontWeight: '700', color: colors.white }}>
          {title}
        </Text>
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
          borderTopWidth: 0.4,
          borderColor: colors.borderColor,
        }}
      >
        {isExpanded && children}
      </AccordionExpanded>
    </Wrapper>
  );
};

const AnimatedArrow = Animated.createAnimatedComponent(ArrowWrapper);

const AccordionExpanded = Animated.createAnimatedComponent(ExpandedWrapper);

export default memo(Accordion);
