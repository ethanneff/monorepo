import { ScrollView, View } from '@shared/components';
import { Image } from 'expo-image';
import { type ImageSourcePropType } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ListHeader } from '@/components/ListHeader';
import { ListItem } from '@/components/ListItem';
import { colors } from '@/constants/colors';

export const AccountScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{ padding: 16 }}
      style={{ backgroundColor: colors.white, paddingTop: insets.top }}
    >
      <View
        alignItems="center"
        paddingBottom={38}
        paddingTop={20}
      >
        <Image
          source={
            require('@/assets/custom/caltrain.webp') as ImageSourcePropType
          }
          style={{
            aspectRatio: 393 / 222,
            width: '42%',
          }}
        />
      </View>
      <ListHeader title="Account" />
      <ListItem title="Personal Info" />
      <ListItem title="Payment Methods" />
      <ListItem title="Security Settings" />
      <ListItem title="Sign Out" />
      <View height={48} />
      <ListHeader title="Help" />
      <ListItem title="Contact Us" />
      <ListItem title="FAQs" />
      <ListItem title="How to use the App" />
      <ListItem title="About the App" />
      <ListItem title="Terms and Conditions" />
      <View
        alignItems="center"
        paddingBottom={24}
        paddingTop={32}
      >
        <Image
          source={require('@/assets/custom/moovel.webp') as ImageSourcePropType}
          style={{ aspectRatio: 314 / 105, width: '40%' }}
        />
      </View>
    </ScrollView>
  );
};
