import { Icon, Text, TouchableOpacity, View } from '@shared/components';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '@/constants/colors';

type ItemProperties = {
  readonly red?: boolean;
  readonly title: string;
};

export const ListItem = ({ red, title }: ItemProperties) => {
  return (
    <TouchableOpacity>
      <View paddingLeft={12}>
        <View
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
          paddingRight={8}
          paddingVertical={20}
        >
          <Text
            style={{
              color: red ? colors.accentRed : colors.black,
              fontSize: 16,
              fontWeight: '300',
            }}
            title={title}
          />
          <Icon
            color={colors.accentRed}
            name="chevron-thin-right"
            size={12}
          />
        </View>
        <LinearGradient
          colors={[colors.lightGray, colors.lightGray]}
          style={{ height: 0.5, width: '100%' }}
        />
      </View>
    </TouchableOpacity>
  );
};
