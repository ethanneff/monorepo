import { useNavigationTheme } from '@shared/features';
import { Navigation } from './navigation';

export const App = () => {
  const theme = useNavigationTheme();
  return <Navigation theme={theme} />;
};
