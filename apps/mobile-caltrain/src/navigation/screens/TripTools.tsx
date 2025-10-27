import { ScrollView, Text, View } from '@shared/components';
import { Image } from 'expo-image';
import { type ImageSourcePropType } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ListItem } from '@/components/ListItem';
import { colors } from '@/constants/colors';

export const TripToolsScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerStyle={{ padding: 16 }}
      style={{ backgroundColor: colors.white, paddingTop: insets.top }}
    >
      <View
        alignItems="center"
        justifyContent="center"
      >
        <Text
          style={{ fontSize: 16, fontWeight: '200' }}
          title="Trip Tools"
        />
        <Image
          source={require('@/assets/custom/people.webp') as ImageSourcePropType}
          style={{
            aspectRatio: 520 / 324,
            marginBottom: 16,
            marginTop: 72,
            width: '55%',
          }}
        />

        <Text
          style={{ fontSize: 22, fontWeight: '300' }}
          title="Get Where You're Going"
        />
        <Text
          style={{
            color: colors.mediumGray,
            fontSize: 12,
            fontWeight: '300',
            paddingBottom: 32,
            paddingHorizontal: 80,
            paddingTop: 8,
            textAlign: 'center',
          }}
          title="Use these tools to help plan your trip around the city"
        />
      </View>
      <ListItem
        red
        title="Caltrain Stations"
      />
      <ListItem
        red
        title="Caltrain Timetable"
      />
      <ListItem
        red
        title="MuniMobile Ticketing App"
      />
    </ScrollView>
  );
};
