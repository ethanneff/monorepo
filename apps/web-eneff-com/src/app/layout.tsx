import { Root } from '@shared/features';
import './globals.css';
import { type Metadata } from 'next';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  description:
    'Staff Software Engineer with 10+ years experience in React Native, scaling mobile development, building high-performing teams, and driving cross-functional strategic vision.',
  title: 'Ethan Neff - Staff Software Engineer',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Root>{children}</Root>;
};

export default RootLayout;
