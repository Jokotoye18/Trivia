import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  TextProps,
  TouchableOpacityProps,
} from 'react-native';
import { colors } from '../../constants';
import { globalStyles } from '../../styles';
import { Text } from './Text';

type ButtonProps = {
  title: string;
  backgroundColor?: string;
  containerStyle?: StyleProp<TouchableOpacityProps>;
  textStyle?: StyleProp<TextProps>;
  onPress?: () => void;
};

export const Button = ({
  title,
  backgroundColor = colors.secondaryBg,
  containerStyle,
  textStyle,
  onPress,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[globalStyles.rowCenter, styles.container, { backgroundColor }, containerStyle]}
      onPress={onPress}
      {...rest}
    >
      <Text
        text={title}
        color={colors.primaryBg}
        fontSize={17}
        fontWeight={'700'}
        style={[styles.title, textStyle]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingVertical: 20,
  },
  title: {
    textTransform: 'uppercase',
  },
});
