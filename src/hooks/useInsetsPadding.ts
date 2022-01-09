import { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useInsetsPadding = () => {
  const insets = useSafeAreaInsets();

  const insetsPadding = useMemo(
    () => ({
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }),
    [insets],
  );

  return { insetsPadding };
};
