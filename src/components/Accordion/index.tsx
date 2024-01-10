import React, {
  memo,
  useCallback,
  useRef,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react';
import { Animated, LayoutAnimation, Platform, UIManager } from 'react-native';

import Text from '../Typography/Text';

import { useTheme } from '../../../stitches.config';

import {
  AccordionRetracted,
  ArrowWrapper,
  ExpandedWrapper,
  Wrapper,
} from './styles';
import { SvgUri } from 'react-native-svg';

interface AccordionProps {
  title: string;
}

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Accordion: FC<PropsWithChildren<AccordionProps>> = ({
  title,
  children,
}) => {
  const { colors } = useTheme();

  const arrowAnimation = useRef(new Animated.Value(0)).current;
  const expandedAnimation = useRef(new Animated.Value(0)).current;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

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
          <SvgUri
            width="100%"
            height="100%"
            uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/ruby.svg"
          />
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
