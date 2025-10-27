import { Text, View } from '@shared/components';
import { colors } from '@/constants/colors';

type HeaderProperties = {
  readonly title: string;
};

export const ListHeader = ({ title }: HeaderProperties) => {
  return (
    <View gap={4}>
      <Text
        style={{
          color: colors.mediumGray,
          fontSize: 12,
          fontWeight: '300',
          textTransform: 'uppercase',
        }}
        title={title}
      />
      <View
        backgroundColor={colors.lightGray}
        height={1}
        width="100%"
      />
    </View>
  );
};
