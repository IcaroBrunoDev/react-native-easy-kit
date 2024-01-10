import React, { useCallback, type FC } from 'react';
import {
  ActivityIndicator,
  type StyleProp,
  type TextStyle,
} from 'react-native';

import { styled, useTheme } from '../../../stitches.config';

interface ButtonProps {
  title: string;
  color?: string;
  ghost?: boolean;
  style?: StyleProp<TextStyle>;
  loading?: boolean;
  rounded?: boolean;
  outlined?: boolean;
  onPress: (...args: any) => Promise<any> | any;
}

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

const TouchableOpacity = styled('TouchableOpacity', {
  width: '100%',
  padding: 15,
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
});

const Text = styled('Text', {
  fontSize: 15,
  fontWeight: '700',
  color: '#fff',
});

export default Button;
