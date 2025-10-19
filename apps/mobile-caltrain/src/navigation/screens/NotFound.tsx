import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from '@shared/components';
import { useCallback } from 'react';
import { StyleSheet } from 'react-native';

export const NotFound = () => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.navigate('HomeTabs' as never);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text title="404" />
      <Button
        onPress={handlePress}
        title="Go to Home"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    gap: 10,
    justifyContent: 'center',
  },
});
