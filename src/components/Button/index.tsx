import React, { type FC, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';

import { Text } from '../Typography';
import { TouchableOpacity } from './styles';

import { useTheme } from '../../../stitches.config';

import type { ButtonProps } from './Models';

const Button: FC<ButtonProps> = ({
  title,
  color,
  ghost,
  style,
  loading,
  rounded,
  onPress,
  outlined,
}) => {
  const { colors } = useTheme();

  /**
   * Function that prevents the event to be called
   * when @prop {loading} is active.
   *
   * @function handlePress @returns {void}
   */

  const handlePress = useCallback(() => {
    !loading && onPress();
  }, [onPress, loading]);

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        {
          borderWidth: outlined ? 1 : 0,
          borderRadius: rounded ? 8 : 0,
          backgroundColor:
            outlined || ghost ? 'transparent' : color ?? colors.mainColor,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={outlined || ghost ? color ?? colors.mainColor : colors.white}
          accessibilityLabel="Carregando..."
        />
      ) : (
        <Text
          style={{
            color: outlined || ghost ? color ?? colors.mainColor : colors.white,
          }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
