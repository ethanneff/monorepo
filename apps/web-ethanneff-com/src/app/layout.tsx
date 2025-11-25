import { Root } from '@shared/features';
import { type Metadata } from 'next';
import './globals.css';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  description: 'Ethan Neff',
  title: 'Ethan Neff',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Root>{children}</Root>;
};

export default RootLayout;
