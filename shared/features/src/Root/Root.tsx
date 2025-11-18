import { Fragment, type PropsWithChildren } from 'react';

export const Root = ({ children }: PropsWithChildren) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <Fragment>{children}</Fragment>;
};
