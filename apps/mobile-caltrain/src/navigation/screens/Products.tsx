import { colors } from '@/constants/colors';
import {
  Icon,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from '@shared/components';
import { spacing } from '@shared/utils';

const Transaction = () => {
  return (
    <View
      flexDirection="row"
      gap={spacing(16)}
      paddingVertical={spacing(12)}
    >
      <View
        alignItems="center"
        backgroundColor={colors.mediumDarkGray}
        borderRadius={spacing(4)}
        height={spacing(28)}
        justifyContent="center"
        width={spacing(28)}
      >
        <Text
          style={{ fontSize: 16, fontWeight: '300' }}
          title="1"
        />
      </View>
      <View
        flex={1}
        gap={spacing(8)}
      >
        <View
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Text
            style={{ fontSize: 12, fontWeight: '400' }}
            title="Day Pass - Adult"
          />
          <Text
            style={{ fontSize: 12, fontWeight: '400' }}
            title="$17.00"
          />
        </View>
        <View
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Text
            style={{
              color: colors.mediumGray,
              fontSize: 12,
              fontWeight: '400',
            }}
            title="Sunnyvale to San Francisco"
          />
          <TouchableOpacity>
            <Text
              style={{
                color: colors.accentRed,
                fontSize: 12,
                fontWeight: '500',
              }}
              title="Buy Again"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

type HeaderProperties = {
  readonly count: number;
  readonly title: string;
};

// eslint-disable-next-line react/no-multi-comp
const Header = ({ count, title }: HeaderProperties) => {
  return (
    <View
      alignItems="center"
      flexDirection="row"
      gap={spacing(4)}
      justifyContent="space-between"
      paddingBottom={spacing(20)}
      paddingTop={spacing(40)}
    >
      <Text
        style={{ fontSize: 16, fontWeight: '300' }}
        title={title}
      />
      <View
        alignItems="center"
        borderColor={colors.mediumGray}
        borderRadius={spacing(4)}
        borderWidth={0.5}
        height={spacing(24)}
        justifyContent="center"
        width={spacing(28)}
      >
        <Text
          style={{ fontSize: 12, fontWeight: '300' }}
          title={count.toString()}
        />
      </View>
    </View>
  );
};

const transactions = Array.from({ length: 20 }, (_, index) => ({
  index,
}));

// eslint-disable-next-line react/no-multi-comp
export const ProductsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ padding: spacing(20) }}
        // style={{ flex: 1, height: '100%' }}
      >
        <View
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Icon
            color={colors.accentRed}
            name="refresh"
            size={24}
          />
          <Text
            style={{ fontSize: 18, fontWeight: '200' }}
            title="My Products"
          />
          <View opacity={0}>
            <Icon
              color={colors.accentRed}
              name="refresh"
              size={24}
            />
          </View>
        </View>
        <Header
          count={1}
          title="In Use"
        />
        <View>
          <View flexDirection="row">
            <Text title="Day Pass" />
            <Icon
              color={colors.black}
              name="person-outline"
              size={12}
            />
            <Text title="Adult" />
          </View>
          <View flexDirection="row">
            <Icon
              color={colors.black}
              name="train-outline"
              size={12}
            />
            <Text title="Sunnyvale" />
            <Icon
              color={colors.black}
              name="arrow-right"
              size={12}
            />
            <Text title="San Francisco" />
          </View>
          <View
            backgroundColor={colors.lightGray}
            height={1}
            width="100%"
          />
          <View flexDirection="row">
            <Text title="1" />
            <Text title="Ticket" />
            <Text title="Valid Until 3:00 AM 10/11/25" />
          </View>
        </View>
        <View alignItems="flex-end">
          <Text title="Add Product" />
          <Icon
            color={colors.accentRed}
            name="chevron-thin-right"
            size={12}
          />
        </View>
        <Header
          count={10}
          title="Stored"
        />
        <View>
          <Text title="You've used up all of your tickets and parking permits." />
          <Text title="Buy more below." />
        </View>
        <Text
          style={{
            color: colors.mediumGray,
            fontSize: 12,
            fontWeight: '400',
            textTransform: 'uppercase',
          }}
          title="Transaction History"
        />
        {transactions.map((transaction) => (
          <Transaction key={transaction.index} />
        ))}
      </ScrollView>
      <TouchableOpacity>
        <View
          alignItems="center"
          backgroundColor={colors.accentRed}
          borderRadius={spacing(4)}
          justifyContent="center"
          margin={spacing(16)}
          marginBottom={spacing(16)}
          padding={spacing(20)}
          // width="100%"
        >
          <Text
            style={{ color: colors.white, fontSize: 18, fontWeight: '600' }}
            title="Buy Products"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
