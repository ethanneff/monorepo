import { colorNames } from './colorNames';

export const dropShadow = (show?: boolean) => {
  if (!show) return {};
  return {
    elevation: 2,
    shadowColor: colorNames.black,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  };
};
