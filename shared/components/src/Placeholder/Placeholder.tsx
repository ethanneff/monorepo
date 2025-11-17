import { Screen } from '../Screen/Screen';
import { Text } from '../Text/Text';

type Properties = {
  readonly children?: React.ReactNode;
  readonly title: string;
};

export const Placeholder = ({ children, title }: Properties) => {
  return (
    <Screen>
      <Text
        textAlign="center"
        title={title}
        variant="large"
      />
      {children}
    </Screen>
  );
};
