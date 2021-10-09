import React, { ComponentProps, useMemo } from 'react';
import { StyleProp, Text as BaseText, TextStyle } from 'react-native';

type TextProps = ComponentProps<typeof BaseText> & {
  text: string;
  fontSize?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  color?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  style?: StyleProp<TextStyle>;
};

export const Text = ({
  text,
  color,
  fontSize,
  fontWeight,
  textAlign,
  style,
  ...rest
}: TextProps): JSX.Element => {
  const propsStyle = useMemo(
    () => ({
      color,
      fontSize,
      textAlign,
      fontWeight,
    }),
    [color, textAlign, fontWeight, fontSize],
  );
  return (
    <BaseText style={[propsStyle, style]} {...rest}>
      {text}
    </BaseText>
  );
};
